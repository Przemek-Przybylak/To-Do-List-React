import { useQueryParameter, useReplaceQueryParameter } from "../../../../QueryParameters";
import SearchQueryParamName from "../../SearchQueryParamName";
import { Input } from "../Form/styled"
import { Wrapper } from "./styled";

const Search = () => {
    const query = useQueryParameter(SearchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: SearchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};

export default Search