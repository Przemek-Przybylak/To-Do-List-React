import { useHistory, useLocation } from "react-router";
import { Paragraph, Input } from "../Form/styled"

export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).getAll("szukaj");
    
    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if(target.value.trim() === "") {
            searchParams.delete("szukaj");
        } else {
            searchParams.set("szukaj", target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
    };
    
    return (
        <Paragraph>
            <Input
            placeholder="Filtruj zadania"
            value={query || ""}
            onChange={onInputChange}
            />
        </Paragraph>
    )
}