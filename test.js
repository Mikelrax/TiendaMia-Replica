let ProductV2 = Class.create()
ProductV2.prototype = {
    initialize: (productData)=>{
        this.sizeTableUrl = location.origin + '/size-chart';
        this.productData = {};
        this.productId = productData['sku'];
        this.productData[this.productId] = productData;
        this.vendorCode = productData['vendor_code'];
        this.isInCustomerWishList = productData['is_in_wish_list'];
        this.selectedProperties = {};
        this.originalPrices = {};
        this.stock = productData['has_stock'];
        this.baseStore = '';
        this.engine = productData['engine'];
        ProductV2.prototype.initGoogleTranslator();
        ProductV2.prototype.initGoogleECTrack();
        ProductV2.prototype.initTooltips();
        ProductV2.prototype.initWishList();
        ProductV2.prototype.initFromManufacturerSection();
        ProductV2.prototype.initImageSlider();
        ProductV2.prototype.initProductSliders();
        ProductV2.prototype.sendFbqData();
    }
    ,
    initComponent: ()=>{
        if (this.baseStore === 'cr') {
            $j(function() {
                $j('.tooltip_producto').tooltip();
                $j('.tooltip_producto_mobile').tooltip();
            });
            $j(function() {
                $j('.tooltip_fit').tooltip();
            });
            $j('.row-tooltip .tooltip-img').tooltip();
        }
    }
    ,
    initGoogleECTrack: ()=>{
        try {
            ga('ec:addImpression', {
                'id': this.productData[this.productId]['sku'],
                'name': this.productData[this.productId]['name'],
                'brand': this.productData[this.productId]['brand'],
                'category': this.productData[this.productId]['category']
            });
            console.log('addImpression en Analytics');
        } catch (ee) {
            console.log('Error en Analytics');
        }
    }
    ,
    setBaseStore: (baseStore)=>{
        this.baseStore = baseStore;
    }
    ,
    initVariations: ()=>{
        let elements = Array.from(document.querySelectorAll('.variation-option.selected')).reverse();
        elements.forEach((element,index)=>{
            setTimeout(()=>{
                element.click();
                if (element.tagName === 'OPTION') {
                    let select = element.parentNode;
                    if (select && select.tagName === 'SELECT') {
                        select.dispatchEvent(new Event('change',{
                            bubbles: true
                        }));
                    }
                }
            }
            , 10);
        }
        );
        let url = new URL(window.location);
        if (window.location.search !== '') {
            for (let i = 0; i < this.variations.length; i++) {
                let variationValue = 0;
                let variationCode = '';
                if (url.searchParams.has(this.variations[i]['variation_code'])) {
                    variationValue = url.searchParams.get(this.variations[i]['variation_code']).replaceAll('%20', ' ');
                    variationCode = this.variations[i]['variation_code']
                }
                if ($j('.variation-' + variationCode).children().is('select')) {
                    for (let j = 0; j < this.variations[i]['options'].length; j++) {
                        if (this.variations[i]['options'][j]['label'] == variationValue) {
                            $j('.variation-' + variationCode + ' select').val(this.variations[i]['options'][j]['option_code']).trigger('change');
                        }
                    }
                } else {
                    $j('.variation-' + variationCode).children().each(function() {
                        if ($j(this).children().attr("title") == variationValue) {
                            $j(this).addClass('selected').trigger('click');
                        }
                    });
                }
            }
        } else if (this.variations[0]['options'].length === 1) {
            $j('.variation-0 select').val('0').trigger('change');
        } else {
            setTimeout(function() {
                $j('.variation-0 select').val('').trigger('change')
            }, 50);
        }
    }
    ,
    getData: ()=>{
        return this.productData
    }
    ,
    getVariations: ()=>{
        return this.variations;
    }
    ,
    getVariationCombinations: ()=>{
        return this.variationCombinations;
    }
    ,
    getSelectedVariation: ()=>{}
    ,
    changeVariationSelection: (select)=>{
        let selectedOption = $j(select).find(':selected');
        if (selectedOption.val() !== '') {
            ProductV2.prototype.updateVariationSelection(selectedOption.data('variation-key'), selectedOption.val(), selectedOption)
        } else {
            delete this.selectedProperties[selectedOption.data('variation-key')];
        }
    }
    ,
    getSelectedCombination: ()=>{
        let selectedCombination = [];
        let variations = this.variations;
        if (variations) {
            Object.keys(variations).forEach((index)=>{
                if (this.selectedProperties[index]) {
                    selectedCombination.push(this.selectedProperties[index]['option_code']);
                }
            }
            );
        }
        return selectedCombination;
    }
    ,
    updateProductInformation: ()=>{
        let variations = this.variations;
        let productData = false;
        let additionalProductData = false;
        if (Object.keys(variations).length === Object.keys(this.selectedProperties).length) {
            let selectedCombination = ProductV2.prototype.getSelectedCombination();
            if (selectedCombination.length === 0) {
                return;
            }
            let combination_key = selectedCombination.join('_');
            let reverse_combination_key = selectedCombination.reverse().join('_');
            let variationCombination = this.variationCombinations;
            if (combination_key && reverse_combination_key) {
                const result = Object.keys(variationCombination).filter(key=>(variationCombination[key][combination_key] !== undefined) || (variationCombination[key][reverse_combination_key] !== undefined));
                if (result[0]) {
                    additionalProductData = variationCombination[result[0]][combination_key] || variationCombination[result[0]][reverse_combination_key];
                }
            }
        }
        Object.keys(this.selectedProperties).forEach((index)=>{
            if (this.selectedProperties[index]['label']) {
                productData = this.selectedProperties[index];
            }
        }
        );
        if (additionalProductData && additionalProductData['prices']['price_clean'] > 0) {
            productData['prices'] = additionalProductData['prices'];
        } else if (Object.keys(this.originalPrices).length > 0) {
            productData['prices'] = {
                'prices': this.originalPrices
            }
        }
        if (additionalProductData && additionalProductData['delivery_data']['delivery_message'] !== undefined) {
            productData['delivery_data'] = additionalProductData['delivery_data'];
        }
        ProductV2.prototype.updateProductTemplate(productData, additionalProductData);
    }
    ,
    updateProductTemplate: (productData,additionalProductData)=>{
        if (productData['prices']['price_local'] !== undefined) {
            $j('.price-line-final_price .currency_price').text(productData['prices']['price_local']);
        }
        if (productData['prices']['price'] !== undefined) {
            $j('.price-line-final_price .dollar_price').text(productData['prices']['price']);
        }
        if ($j('.price-line-list_price .currency_price').length > 0) {
            if (productData['prices']['list_price_local'] !== undefined) {
                $j('.price-line-list_price .currency_price').text(productData['prices']['list_price_local']);
            }
            if (productData['prices']['list_price'] !== undefined) {
                $j('.price-line-list_price .dollar_price').text(productData['prices']['list_price']);
            }
            if (productData['prices']['save_price_local'] !== undefined) {
                $j('.price-line-save_price .currency_price').text(productData['prices']['save_price_local']);
            }
            if (productData['prices']['save_price'] !== undefined) {
                $j('.price-line-save_price .dollar_price').text(productData['prices']['save_price']);
            }
        }
        if (productData['delivery_data']['delivery_message'] !== undefined) {
            $j('.price-line-delivery_promise span').first().html(productData['delivery_data']['delivery_message']);
        }
        $j('#configurable_without_stock').hide();
        let sizeIsChosen = ($j('.variation-0 option:selected').val() != '');
        let shouldCheckSize = Object.keys(this.variations).length === Object.keys(this.selectedProperties).length;
        if (shouldCheckSize && sizeIsChosen) {
            if (additionalProductData === undefined || additionalProductData === false) {
                $j('#product-prices').hide();
                $j('.quantity-input-container').hide();
                $j('.payment-logos').hide();
                $j('.button-cart').hide();
                $j('.detail-delivery_promise').hide();
                $j('#configurable_without_stock').show();
            } else {
                $j('#product-prices').show();
                $j('.quantity-input-container').show();
                $j('.payment-logos').show();
                $j('.button-cart').show();
                $j('.detail-delivery_promise').show();
                $j('#configurable_without_stock').hide();
            }
        }
        let imageArrayToUse = [];
        if (productData['images']) {
            imageArrayToUse = productData['images'];
        }
        if (imageArrayToUse.length > 0) {
            let imageSliderElement = $j('#product-images-slider');
            imageSliderElement.html('');
            imageArrayToUse.forEach((image)=>{
                imageSliderElement.append('<li><a rel="useZoom: \'zoom1\', smallImage: \'' + image['src'] + '\' " href="' + image['src'] + '" class=\'cloud-zoom-gallery\'  >' + '<img alt="" src="' + image['src'] + '" width="50"' + ' height="52"/></a></li>');
            }
            );
            $j('#main-image').attr('src', imageArrayToUse[0]['src']);
            $j('#zoom1').attr('href', imageArrayToUse[0]['src']);
            $j('.cloud-zoom').CloudZoom(imageArrayToUse[0]['src']);
            ProductV2.prototype.initImageSlider();
            $j('.cloud-zoom-gallery').CloudZoom();
        }
    }
    ,
    setOriginalPrices: (originalPrices)=>{
        this.originalPrices = originalPrices;
    }
    ,
    changeSkuVariation: (select)=>{
        let selectedOption = $j(select).find(':selected');
        if (selectedOption.data('sku')) {
            ProductV2.prototype.fetchProduct(selectedOption.data('sku'));
        }
    }
    ,
    updateVariationStatus: (property,variationSelection)=>{
        if (this.variations) {
            let variations = this.variations;
            Object.keys(variations).forEach((index)=>{
                if (property != index && variations[index]['options']) {
                    variations[index]['options'].forEach((optionItem)=>{
                        if (optionItem['variation_availability_map'][variations[property]['variation_code']] && optionItem['variation_availability_map'][variations[property]['variation_code']].find(element=>element == variationSelection) === undefined) {
                            $j('.variation-option-' + index + '-' + optionItem['option_code']).addClass('unavaiable');
                        }
                        if ($j('.variation-option-' + index + '-' + optionItem['option_code']).hasClass('selected')) {
                            variations[property]['options'].forEach((item)=>{
                                if (optionItem['variation_availability_map'][variations[property]['variation_code']].indexOf(item['option_code']) === -1) {
                                    $j('.variation-option-' + property + '-' + item['option_code']).addClass('unavaiable');
                                }
                            }
                            );
                        }
                    }
                    );
                }
            }
            );
            let result = Object.keys(variations[property]['options']).filter(key=>variations[property]['options'][key]['option_code'] == variationSelection);
            if (result) {
                this.selectedProperties[property] = variations[property]['options'][result[0]];
            }
            if (this.selectedProperties !== undefined && Object.keys(this.selectedProperties).length > 0) {
                ProductV2.prototype.updateProductInformation();
            }
        }
    }
    ,
    updateVariationSelection: (property,variationSelection,item)=>{
        let currentProperty = $j('.variation-option');
        $j('.variation-' + property + ' .variation-option').removeClass('selected');
        currentProperty.removeClass('unavaiable');
        $j(item).addClass('selected');
        markSelectedVariationInLabel();
        ProductV2.prototype.updateVariationStatus(property, variationSelection)
    }
    ,
    setVariations: (variations)=>{
        this.variations = variations;
    }
    ,
    setVariationCombinations: (variationCombinations)=>{
        this.variationCombinations = variationCombinations;
    }
    ,
    fetchProduct: (identifier)=>{
        showLoadingDiv()
        fetch(PRODUCT_API + '?vendorCode=' + this.vendorCode + '&sku=' + identifier, {
            method: 'GET',
            mode: 'same-origin',
        }).then((response)=>response.text()).then((data)=>{
            if (data) {
                $j('.main-container .padding-s').html(data)
            } else {
                alert('Ocorreu um erro ao carregar o seu produto, tente novamente.')
            }
        }
        ).catch((reason)=>{
            console.error(reason)
        }
        ).finally(()=>{
            hideLoadingDiv()
        }
        )
    }
    ,
    initFromManufacturerSection: ()=>{
        if (document.getElementById('product-from-manufacturer') !== null) {
            let images = document.getElementsByClassName('a-lazy-loaded')
            for (let i = 0; i < images.length; i++) {
                images[i].src = images[i].getAttribute('data-src')
            }
        }
    }
    ,
    initImageSlider: ()=>{
        $j('.jcarousel-control-prev').hide()
        $j('.jcarousel-control-next').hide()
        if ($j('#product-images-slider li').length > 5) {
            var jcarousel = $j('.image-slider')
            jcarousel.on('jcarousel:reload jcarousel:create', function() {
                var width = $j('.image-slider').width()
                width = width / 1
                jcarousel.jcarousel('items').css('width', width + 'px')
                $j('.product-image-container .jcarousel-control-prev').jcarouselControl({
                    target: '-=1',
                })
                $j('.product-image-container .jcarousel-control-next').jcarouselControl({
                    target: '+=1',
                })
            }).jcarousel({
                wrap: 'circular',
                animation: 'slow',
            })
            $j('.jcarousel-control-prev').show()
            $j('.jcarousel-control-next').show()
        }
    }
    ,
    initProductSliders: ()=>{
        let sliders = $j("div[id^='slider-']");
        sliders.each(function(i) {
            let jcarousel = jQuery('#slider-' + i + ' .category-products');
            jcarousel.on('jcarousel:reload jcarousel:create', function() {
                let width = jcarousel.width();
                let win = jQuery(window).width();
                let items = 5;
                let width_diff = 20;
                if (win < 1200)
                    items = 4;
                width = width / items - width_diff;
                jcarousel.jcarousel('items').css('width', width + 'px');
                jQuery('#slider-' + i + ' .jcarousel-control-prev').jcarouselControl({
                    target: '-=1'
                });
                jQuery('#slider-' + i + ' .jcarousel-control-next').jcarouselControl({
                    target: '+=1'
                });
            }).jcarousel({
                wrap: 'circular',
                animation: 'slow'
            });
        });
    }
    ,
    addToWishList: ()=>{
        $j('.favorite_icon').hide()
        $j('.cargando-favorite-img').show()
        fetch(WISH_LIST_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: 'ajax=addwishlist' + '&sku=' + this.productId + '&store=' + this.vendorCode,
            mode: 'same-origin',
        }).then((response)=>response.text()).then(data=>{
            if (data === 'success') {
                try {
                    gaSendEvent('Add to Fav', 'Detail', this.vendorCode.toUpperCase() + '-' + this.productId);
                } catch (e) {
                    console.log('Analytic Error');
                }
                $j('.favorite').addClass('active')
                $j('.favorite_icon').show()
                $j('.cargando-favorite-img').hide()
            } else if (data === 'removed') {
                try {
                    gaSendEvent('Remove Fav', 'Detail', this.vendorCode.toUpperCase() + '-' + this.productId);
                } catch (e) {
                    console.log('Analytic Error');
                }
                $j('.favorite').removeClass('active')
                $j('.favorite_icon').show()
                $j('.cargando-favorite-img').hide()
            }
        }
        ).catch(reason=>{
            console.error(reason)
        }
        )
    }
    ,
    checkAddToCart: (node)=>{
        if (this.variationCombinations !== undefined && this.variationCombinations.length > 0) {
            let firstElement = this.variationCombinations[0];
            let fistKey = Object.keys(firstElement)[0];
            let properties = fistKey.split('_');
            if (properties.length !== Object.keys(this.selectedProperties).length) {
                $j('#datos_faltantes_modal').modal("show");
                ProductV2.prototype.paintInvalidFields(this.selectedProperties);
                return;
            }
        }
        if (this.productData[this.productId]['showShippingWithDelayMessage']) {
            ProductV2.prototype.showNavidadMessage(node)
        } else {
            ProductV2.prototype.addToCart(node)
        }
    }
    ,
    paintInvalidFields: (selectedProperties)=>{
        if (!(selectedProperties[1])) {
            $j('.option-container.variation-1').addClass('invalid');
            $j('.option-container.variation-1 select').on("change", function() {
                $j('.option-container.variation-1').removeClass('invalid');
            });
        }
    }
    ,
    showNavidadMessage: (node)=>{
        let action_result = node.id === 'add-to-cart-redirect' ? 'cart' : 'return';
        $j('#aviso_retraso_orden').modal('show')
        $j('.button.acepto').hide()
        $j('.button.acepto.' + action_result).show()
        $j('.button.acepto.' + action_result).attr("onclick", "product.addToCart(this)");
        $j('.button.no-acepto').attr("onclick", "product.closeNavidadMessage('No')");
        $j('.close').attr("onclick", "product.closeNavidadMessage('X')");
        var minDaysPromise, maxDaysPromise;
        if (this.productData[this.productId]['deliveryType'] != 'slowest') {
            minDaysPromise = this.productData[this.productId]['minDaysPromise'];
            maxDaysPromise = this.productData[this.productId]['maxDaysPromise'];
        } else {
            minDaysPromise = 'superior';
            maxDaysPromise = this.productData[this.productId]['minDaysPromise'];
        }
        $j('#aviso_retraso_orden #min_days_promise').html(minDaysPromise);
        $j('#aviso_retraso_orden #max_days_promise').html(maxDaysPromise);
    }
    ,
    closeNavidadMessage: (action)=>{
        gaSendEvent('Christmas delay', 'Show_modal', action);
    }
    ,
    addToCart: (node)=>{
        let params = (new URL(document.location)).searchParams;
        let rel = params.get('rel');
        if (this.productData[this.productId]['showShippingWithDelayMessage']) {
            gaSendEvent('Christmas delay', 'Show_modal', 'Si')
        }
        let onlyNumberRegex = new RegExp('^[0-9]+$')
        let redirect = node.id === 'add-to-cart-redirect'
        let inputQty = $j('#quantity-input').val()
        let blckfrd = this.productData[this.productId]['idSubsidio'] ?? '';
        if (onlyNumberRegex.test(inputQty) === true) {
            $j('.cart-spinner').show()
            $j('.button-cart').hide()
            let params = {
                'ajax': 'addtocartcustom',
                form_key: window.FORM_KEY,
                'productsku': this.productId,
                'productqty': inputQty,
                'site': this.vendorCode,
                'rel': rel,
                'option': ProductV2.prototype.getSelectedCombination().join('_'),
                'blckfrd': blckfrd
            };
            if (findGetParameter('removeWishlist') == 'ok') {
                params['removeWishlist'] = 'ok';
            }
            fetch(ADD_TO_CART_URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: jQuery.param(params),
                mode: 'same-origin',
            }).then((response)=>response.json()).then(data=>{
                if (data['status'] !== 'success') {
                    alert('Ocorreu um erro, tente novamente')
                    gaSendEvent('Producto agregado al carrito', 'Error')
                } else {
                    try {
                        let trackingLabel = this.productData[this.productId]['isImports'] ? 'Imports' : this.productData[this.productId]['isCategoriaC'] ? 'Categoria C' : '';
                        let sku = this.productData[this.productId]['sku'];
                        iubendaFbq.prototype.waitForFbq(function() {
                            fbq('track', 'AddToCart', {
                                content_ids: sku,
                                content_name: this.productData[this.productId]['name'],
                                category: this.productData[this.productId]['category'],
                                content_type: 'product',
                                condition: this.productData[this.productId]['product_status'],
                                has_stock: this.productData[this.productId]['has_stock'],
                                value: this.productData[this.productId]['price'],
                                currency: 'USD'
                            })
                        });
                        ProductV2.prototype.sendAddToCartGA4Data();
                        EmarsysCartEvent.prototype.processCartItems();
                        try {
                            ga('ec:addProduct', {
                                'id': this.productData[this.productId]['sku'],
                                'name': this.productData[this.productId]['name'],
                                'price': this.productData[this.productId]['price'],
                                'quantity': inputQty,
                                'brand': this.productData[this.productId]['brand'],
                                'category': this.productData[this.productId]['category'],
                            })
                            ga('ec:setAction', 'add')
                            if (isRetailrocketEnabled) {
                                try {
                                    rrApi.addToBasket(encodeRRProductId(this.productData[this.productId]['sku']), {
                                        'stockId': base_store
                                    })
                                } catch (e) {}
                            }
                        } catch (e) {
                            console.log('Analytics is not defined.')
                        }
                        if (redirect) {
                            gaSendEvent('Buy', 'SKU: ' + this.productData[this.productId]['vendor_code'] + '-' + this.productId, trackingLabel);
                            window.location = CART_URL;
                        } else {
                            gaSendEvent('Producto agregado al carrito', 'SKU: ' + this.productData[this.productId]['vendor_code'] + '-' + this.productId, trackingLabel);
                            addToMiniCartNew(data)
                        }
                    } catch (ee) {
                        console.log('Error en Analytics')
                    }
                }
            }
            ).catch(reason=>{
                alert('Ocorreu um erro, tente novamente')
                console.error(reason)
            }
            ).finally(()=>{
                if (!redirect) {
                    $j('.cart-spinner').hide()
                    $j('.button-cart').show()
                }
            }
            )
        } else {
            alert('Quantidade inválida')
        }
    }
    ,
    initWishList: ()=>{
        let favoriteIcon = $j('#wishlist-actions .favorite_icon')
        if (favoriteIcon.length > 0) {
            favoriteIcon.remove()
        }
        if (isLoggedin) {
            if (this.isInCustomerWishList) {
                $j('#wishlist-actions').append('<span class="favorite_icon favorite active" ' + 'onclick="product.addToWishList()"></span>')
            } else {
                $j('#wishlist-actions').append('<span class="favorite_icon favorite" ' + 'onclick="product.addToWishList()"></span>')
            }
        } else {
            $j('#wishlist-actions').append('<span class="favorite_icon favorite"  onclick="showLogin()"></span>')
        }
    }
    ,
    initTooltips: ()=>{
        if (document.getElementsByClassName('tooltip-icon').length > 0) {
            $j('.tooltip-icon').tooltip()
        }
        if (document.getElementsByClassName('tooltip_price').length > 0) {
            $j('.tooltip_price').tooltip()
        }
        if (document.getElementsByClassName('product-tooltip').length > 0) {
            $j('.product-tooltip').tooltip()
        }
    }
    ,
    initGoogleTranslator: ()=>{
        if (document.getElementById('google_translate_element') !== null) {
            $j('.goog-te-menu-frame').remove()
            $j('#goog-gt-tt').remove()
            $j('.goog-te-spinner-pos').remove()
            $j.getScript('//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        }
    }
    ,
    popupSizes: ()=>{
        gaSendEvent('Detail', 'Ver aquí tabla de talles');
        window.open(this.sizeTableUrl, 'reviews', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=980,height=900')
    }
    ,
    toggleSeeMore: (code)=>{
        $j('.product-information .detail-' + code).toggleClass('opened')
        if ($j('.product-information .detail-' + code).hasClass('opened')) {
            $j('.blur-' + code).hide();
            gaSendEvent('Detail', 'Ver más', '');
        } else {
            $j('.blur-' + code).show();
            gaSendEvent('Detail', 'Ver menos', '');
        }
        $j('.see-more-button-' + code + ' .see-more').toggle()
        $j('.see-more-button-' + code + ' .see-less').toggle()
    }
    ,
    checkShowImportsDriver: ()=>{
        if (this.baseStore === 'uy') {
            let productData = this.productData[this.productId];
            let hasStock = productData['has_stock'];
            if (hasStock) {
                if (productData['isImports']) {
                    $j('.item-importation').show();
                    let trackingLabel = productData['sku'] + ', ' + productData['deliveryType'] + ', ' + productData['weight'] + ', ' + productData['price'];
                    let trackingCategory = productData['planeImportation'] ? 'Product Imports' : 'Product Imports Ship';
                    gaSendEvent(trackingCategory, productData['category'], trackingLabel);
                } else {
                    if (productData['shouldImportation']) {
                        let quantity = $j('#quantity-input').val();
                        let maxFranquiciaPrice = 200;
                        let hasImportsPrice = quantity * productData['price'] > maxFranquiciaPrice;
                        if (hasImportsPrice) {
                            $j('.item-importation').show();
                            if ($j('#delivery_promise_express') && $j('#delivery_promise_normal')) {
                                $j('#delivery_promise_express').hide();
                                $j('#delivery_promise_normal').show();
                            }
                        } else {
                            $j('.item-importation').hide();
                            if ($j('#delivery_promise_express') && $j('#delivery_promise_normal')) {
                                $j('#delivery_promise_normal').hide();
                                $j('#delivery_promise_express').show();
                            }
                        }
                    } else {
                        $j('.item-importation').hide();
                    }
                }
            } else {
                $j('.item-importation').hide();
            }
        } else {
            $j('.item-importation').hide();
        }
    }
    ,
    sendGTagData: ()=>{
        if (this.baseStore === 'uy') {
            gtag('event', 'page_view', {
                ecomm_pagetype: 'product',
                ecomm_prodid: this.productData[this.productId]['sku'],
                ecomm_totalvalue: this.productData[this.productId]['price'],
            });
        } else {
            gtag('event', 'page_view', {
                ecomm_pagetype: 'product',
                ecomm_prodid: this.productData[this.productId]['sku'],
                ecomm_totalvalue: this.productData[this.productId]['localPriceClean'],
            });
        }
    }
    ,
    prepareItemGA4Data: (includeQuantity=false)=>{
        let category = (this.productData[this.productId]['category'] ?? '').split(">");
        if (category.length > 5)
            category[4] = category.slice(4).join(">");
        let item = {
            item_name: this.productData[this.productId]['name'],
            item_id: this.vendorCode?.toUpperCase() + '-' + this.productData[this.productId]['sku'],
            price: this.productData[this.productId]['price'],
            currency: "USD",
            item_brand: this.productData[this.productId]['brand'],
            item_category: category[0].trim(),
            item_stock_status: this.productData[this.productId]['has_stock'] ? "In stock" : "Out of Stock",
        }
        if (includeQuantity)
            item['quantity'] = $j('#quantity-input').val() ?? '';
        if (category[1])
            item['item_category2'] = category[1].trim();
        if (category[2])
            item['item_category3'] = category[2].trim();
        if (category[3])
            item['item_category4'] = category[3].trim();
        if (category[4])
            item['item_category5'] = category[4].trim();
        return item;
    }
    ,
    sendViewItemGA4Data: (engine)=>{
        dataLayer.push({
            ecommerce: null
        });
        dataLayer.push({
            event: "view_item",
            pageName: this.productData[this.productId]['name'],
            pageType: "product",
            ecommerce: {
                items: [ProductV2.prototype.prepareItemGA4Data()],
                translatedBy: engine
            }
        });
    }
    ,
    sendAddToCartGA4Data: ()=>{
        dataLayer.push({
            event: "add_to_cart",
            coupon: COUPON_CODE,
            ecommerce: {
                items: [ProductV2.prototype.prepareItemGA4Data(false)],
                action: {
                    items: [ProductV2.prototype.prepareItemGA4Data(true)]
                }
            }
        });
    }
    ,
    sendFbqData: ()=>{
        let sku = this.productData[this.productId]['sku'];
        iubendaFbq.prototype.waitForFbq(function() {
            fbq('track', 'ViewContent', {
                condition: this.productData[this.productId]['product_status'],
                has_stock: this.productData[this.productId]['has_stock'],
                content_name: this.productData[this.productId]['name'],
                content_category: this.productData[this.productId]['category'],
                product_type: this.productData[this.productId]['category'],
                content_id: sku,
                content_type: 'product',
                value: this.productData[this.productId]['price'],
                currency: 'USD',
                google_product_category: this.productData[this.productId]['category']
            });
        });
    }
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2)
        return parts.pop().split(';').shift();
}
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,pt',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        multilanguagePage: true,
        autoDisplay: false,
    },'google_translate_element');
    var currentLang = getCookie('googtrans');
    var finalEngine = this.engine;
    if (currentLang != "" && currentLang != null) {
        finalEngine += '+GoogleTranslate-' + currentLang;
    }
    ProductV2.prototype.sendViewItemGA4Data(finalEngine);
}
function goBackOrHome() {
    let currentHost = window.location.hostname;
    if (document.referrer.include(currentHost)) {
        window.history.back();
    } else {
        let currentStore = store ?? getCookie('pais_inicio') ?? '';
        window.location.href = currentStore;
    }
}
function setProductTaxCategory(productTaxCategory) {
    if (productTaxCategory != '') {
        $j("#tax-category-missing").hide();
        $j('#category_configurable_producto_ajax').removeClass('invalid');
        $j('.category_configurable_producto_ajax .required').removeClass('invalid');
    }
}
function markSelectedVariationInLabel() {
    $j('.variations-options .option-container').each(function(index) {
        let selectedVariationText = '';
        if ($j('div[class*="variation-option-' + index + '"].selected').length) {
            selectedVariationText = $j('div[class*="variation-option-' + index + '"].selected').text().trim();
            if (selectedVariationText === "") {
                selectedVariationText = $j('div[class*="variation-option-' + index + '"].selected img').attr('title').trim();
            }
        } else if ($j('select#' + index).length) {
            if ($j('select#' + index + ' option:selected').index() !== 0) {
                selectedVariationText = $j('select#' + index + ' option:selected').text().trim();
            }
        }
        if (selectedVariationText !== "") {
            $j('.lbl-selected-' + index).text(': ' + selectedVariationText);
        }
    });
}
