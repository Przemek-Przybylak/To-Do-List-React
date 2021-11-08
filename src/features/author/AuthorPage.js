import Section from "../../common/Section/";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { Article, Paragraph } from "./styled";

export const AuthorPage = () => {
    return (
        <Container>
            <Header
                tittle="O Autorze"
            />
            <Section
                tittle="Przemek Przybylak"
                body={
                    <>
                        <Article>
                           <Paragraph> 
                            Nazywam się Przemysław Przybylak budową stron interesuję się od 2021 roku.
                            Obecnie moim głównym celem jest zostanie frontend developerem. Chcę jak najszybciej zostać
                            profesjonalistą i rozpocząć swoją przygodę w branży IT!
                            </Paragraph>
                            <Paragraph>
                                Prywatnie jestem ojcem 2 dzieci. Są to dziewczynki pierwsza ma na imię <em>Ola</em>, a druga 
                            <em> Natalia</em>. Niedługo nasza rodzina powiększy się o kolejnego członka rodziny, a mianowicie o
                            <em> Magdalenę</em>.
                            </Paragraph>
                            <Paragraph>
                            Kocham podróżować, oraz przebywać na łonie natury. Nieważne czy Tatry, czy pobliski las, przyroda od
                            zawsze była dla mnie źródłem potężnego spokoju wewnętrznego, oraz natchnienia.
                            </Paragraph>
                        </Article>
                    </>
                }
            />
        </Container>
    )
}