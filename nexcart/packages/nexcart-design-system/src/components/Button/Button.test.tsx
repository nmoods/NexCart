import Button from "./Button";
import {render} from "@testing-library/react";

describe('Button', () => {
    it('Should render with text', () => {
        render(
            <Button children={'Dhurandhar'}/>
        )
    });
})