import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/layout/LegalLayout";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
    title: "Impressum",
    description: "Impressum und rechtliche Angaben.",
};

export default function ImprintPage() {
    const { address } = siteConfig;

    return (
        <LegalLayout
            eyebrow='Rechtliches'
            title='Impressum'
            currentLabel='Impressum'
        >
            <h2>Anbieter der Website</h2>
            <p>
                {siteConfig.agentName}
                <br />
                {address.street}
                <br />
                {address.postalCode} {address.city}
                <br />
                Baden-Württemberg, Deutschland
            </p>
            <p>
                Telefon:{" "}
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                <br />
                Website: <a href={siteConfig.url}>{siteConfig.url}</a>
                <br />
                E-Mail:{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <br />
                E-Mail (amondo):{" "}
                <a href='mailto:olesja.dervishi@amondo-reiseberater.de'>
                    olesja.dervishi@amondo-reiseberater.de
                </a>
            </p>
            <p>
                Unternehmensform: Einzelunternehmen
                <br />
                Berufs- oder Tätigkeitsbezeichnung: Reiseberaterin
            </p>

            <h2>Tätigkeit als Reisevermittlerin</h2>
            <p>
                {siteConfig.agentName} ist als selbstständige Reiseberaterin
                Partnerin von amondo – Die Urlaubsprofis. Weitere Informationen
                zu amondo finden Sie unter{" "}
                <a
                    href='https://www.amondo-urlaubsprofis.de'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    https://www.amondo-urlaubsprofis.de
                </a>
                .
            </p>
            <p>
                Reiseleistungen werden vermittelt. Vertragspartner bei einer
                Buchung ist der jeweilige Reiseveranstalter bzw.
                Leistungsträger; es gelten dessen Reise- und
                Geschäftsbedingungen.
            </p>

            <h2>Streitbeilegung</h2>
            <p>
                Hinweis zur Verbraucherinformation gemäß DSA (Verordnung (EU)
                2022/2065): Bei verbraucherrechtlichen Problemen können Sie auf
                der Website „Ihr Europa“
                (https://europa.eu/youreurope/citizens/consumers/) nützliche
                Beratung finden. Darüber hinaus können Sie sich an eine
                außergerichtliche Streitbeilegungsstelle wenden, die gemäß
                Artikel 21 der Verordnung (EU) 2022/2065 (Gesetz über digitale
                Dienste) zertifiziert ist. Eine Übersicht über diese Stellen
                stellt die Europäische Kommission unter folgendem Link bereit:
                https://digital-strategy.ec.europa.eu/de/policies/dsa-out-court-dispute-settlement.
            </p>
            <p>
                Information zur alternativen Streitbeilegung nach § 36
                Verbraucherstreitbeilegungsgesetz – VSBG (abrufbar unter
                https://www.gesetze-im-internet.de/vsbg/): Wir sind weder bereit
                noch verpflichtet, an einem Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
                {siteConfig.agentName}
                <br />
                {address.street}
                <br />
                {address.postalCode} {address.city}
            </p>

            <h2>Disclaimer</h2>
            <h3>Haftung</h3>
            <p>
                Wir sind für die Inhalte unserer Internetseiten nach den
                Maßgaben der allgemeinen Gesetze, insbesondere nach § 7 Abs. 1
                des Digitale-Dienste-Gesetzes (DDG), verantwortlich. Alle
                Inhalte werden mit der gebotenen Sorgfalt und nach bestem Wissen
                erstellt. Soweit wir auf unseren Internetseiten mittels
                Hyperlink auf Internetseiten Dritter verweisen, können wir keine
                Gewähr für die fortwährende Aktualität, Richtigkeit und
                Vollständigkeit der verlinkten Inhalte übernehmen, da diese
                Inhalte außerhalb unseres Verantwortungsbereichs liegen und wir
                auf die zukünftige Gestaltung keinen Einfluss haben. Sollten aus
                Ihrer Sicht Inhalte gegen geltendes Recht verstoßen oder
                unangemessen sein, teilen Sie uns dies bitte mit.
            </p>
            <p>
                Die rechtlichen Hinweise auf dieser Seite sowie alle Fragen und
                Streitigkeiten im Zusammenhang mit der Gestaltung dieser
                Internetseite unterliegen dem Recht der Bundesrepublik
                Deutschland.
            </p>

            <h3>Datenschutz</h3>
            <p>
                Unsere Datenschutzhinweise finden Sie unter{" "}
                <Link href='/datenschutz'>{siteConfig.url}/datenschutz</Link>.
            </p>

            <h3>Urheberrechtshinweis</h3>
            <p>
                Die auf unserer Internetseite vorhandenen Texte, Bilder, Fotos,
                Videos oder Grafiken unterliegen in der Regel dem Schutz des
                Urheberrechts. Jede unberechtigte Verwendung (insbesondere die
                Vervielfältigung, Bearbeitung oder Verbreitung) dieser
                urheberrechtsgeschützten Inhalte ist daher untersagt. Wenn Sie
                beabsichtigen, diese Inhalte oder Teile davon zu verwenden,
                kontaktieren Sie uns bitte im Voraus unter den oben stehenden
                Angaben. Soweit wir nicht selbst Inhaber der benötigten
                urheberrechtlichen Nutzungsrechte sein sollten, bemühen wir uns,
                einen Kontakt zum Berechtigten zu vermitteln.
            </p>

            <h2>Bildnachweise</h2>
            <p>
                Die in den Reiseberichten verwendeten Fotos sowie die
                Porträtfotos sind eigene Aufnahmen von {siteConfig.agentName}.
            </p>
        </LegalLayout>
    );
}
