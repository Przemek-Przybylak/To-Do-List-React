import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { Article } from "./styled";

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
                            Nazywam się Przemysław Przybylak budową stron interesuję się od 2021 roku.<br />
                            Obecnie moim głównym celem jest zostanie frontend developerem. Chcę jak najszybciej zostać
                            profesjonalistą i rozpocząć swoją przygodę w branży IT!<br />
                            Prywatnie jestem ojcem 2 dzieci. Są to dziewczynki pierwsza ma na imię <em>Ola</em>, a druga 
                            <em> Natalia</em>. Niedługo nasza rodzina powiększy się o kolejnego członka rodziny, a mianowicie o
                            <em> Magdalenę</em>.<br />
                            Kocham podróżować, oraz przebywać na łonie natury. Nieważne czy Tatry, czy pobliski las, przyroda od
                            zawsze była dla mnie źródłem potężnego spokoju wewnętrznego, oraz natchnienia.<br />
                            Skoro kocham góry, to dlaczego nie zająć się alpinistyką przemysłową?<br />
                            Niedawno zdobyłem certyfikat IRATA level 1, dzięki czemu mogę wykonuję pracę Alpinisty Przemysłowego.
                        </Article>
                    </>
                }
            />
        </Container>
    )
}