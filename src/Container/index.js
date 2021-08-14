import { Container }from "./styled"

const container = ({ children }) => (
    <Container className="container">
        {children}
    </Container>
)

export default container