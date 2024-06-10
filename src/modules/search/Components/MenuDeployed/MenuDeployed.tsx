import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getCategories } from '../../../constant/getCategories';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { categoriesProps } from '../FilterSearch/FilterSearch';
import firtsLetterUpper from '../../utils/firtsLetterUpper';

export default function MenuDeployed({ setCategories }: categoriesProps) {
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const productCategories = getCategories();

    const handleToggleCategory = (category: string) => {
        setSelectedCategories((prevSelected) => {
            let updatedSelected: string[];
            if (category === "Todas") {
                if (prevSelected.includes("Todas")) {
                    updatedSelected = [];
                } else {
                    updatedSelected = [...productCategories];
                }
            } else {
                if (prevSelected.includes(category)) {
                    updatedSelected = prevSelected.filter((item) => item !== category);
                } else {
                    updatedSelected = [...prevSelected, category];
                }
            }
            setCategories(updatedSelected.filter((cat) => cat !== "Todas"));
            return updatedSelected;
        });
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                Categorias
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }} component={'div'}>
                    {productCategories.map((category, index) => (
                        <div key={index}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleToggleCategory(category)}
                                        style={category !== "Todas" ? { paddingLeft: "20px" } : {}}
                                    />
                                }
                                label={firtsLetterUpper(category)}
                            />
                        </div>
                    ))}
                </Typography>
            </Popover>
        </div>
    );
}
