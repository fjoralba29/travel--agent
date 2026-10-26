import type { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
    title: "Datenschutzerklärung",
    description: "Datenschutzerklärung für die Nutzung unserer Website.",
};

export default function DataProtectionPage() {
    const { address } = siteConfig;

    return (
        <LegalLayout
            eyebrow='Rechtliches'
            title='Datenschutzerklärung'
            currentLabel='Datenschutz'
        >
            <h2>Information über die Erhebung personenbezogener Daten</h2>
            <p>
                (1) Im Folgenden informieren wir über die Erhebung
                personenbezogener Daten bei Nutzung unserer Website.
                Personenbezogene Daten sind alle Daten, die auf Sie persönlich
                beziehbar sind, z. B. Name, Adresse, E-Mail-Adressen,
                Nutzerverhalten. Dadurch möchten wir Sie über unsere
                Verarbeitungsvorgänge informieren und zugleich den gesetzlichen
                Pflichten, insbesondere aus der EU-Datenschutz-Grundverordnung
                (DS-GVO), nachkommen.
            </p>
            <p>
                (2) Verantwortlich gem. Art. 4 Abs. 7
                EU-Datenschutz-Grundverordnung (DS-GVO) ist{" "}
                {siteConfig.agentName}, {address.street}, {address.postalCode}{" "}
                {address.city}, Telefon:{" "}
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>,
                E-Mail:{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
            <p>
                (3) Bei Ihrer Kontaktaufnahme mit uns per E-Mail, über unser
                Kontaktformular, per Telefon oder über WhatsApp werden die von
                Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und
                Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu
                beantworten. Die in diesem Zusammenhang anfallenden Daten
                löschen wir, falls die Anfrage einem Vertrag zugeordnet wird,
                nach den Fristen zur Vertragslaufzeit. Ansonsten löschen wir
                sie, nachdem die Speicherung nicht mehr erforderlich ist, oder
                schränken die Verarbeitung ein, falls gesetzliche
                Aufbewahrungspflichten bestehen.
            </p>
            <p>
                (4) Falls wir für einzelne Funktionen unseres Angebots auf
                beauftragte Dienstleister zurückgreifen, werden wir diese
                Dienstleister stets sorgfältig auswählen und überwachen und
                informieren Sie untenstehend im Detail über die jeweiligen
                Vorgänge. Dabei nennen wir auch die festgelegten Kriterien der
                Speicherdauer.
            </p>

            <h2>Ihre Rechte</h2>
            <p>
                (1) Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
                betreffenden personenbezogenen Daten:
            </p>
            <ul>
                <li>Recht auf Auskunft</li>
                <li>Recht auf Berichtigung oder Löschung</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
            </ul>
            <p>
                (2) Sie haben zudem das Recht, sich bei einer
                Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten durch uns zu beschweren. Zuständig ist
                der Landesbeauftragte für den Datenschutz und die
                Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20,
                70173 Stuttgart.
            </p>

            <h2>Erhebung personenbezogener Daten bei Besuch unserer Website</h2>
            <p>
                (1) Bei der bloß informatorischen Nutzung der Website, also wenn
                Sie uns nicht anderweitig Informationen übermitteln, erheben wir
                nur die personenbezogenen Daten, die Ihr Browser an unseren
                Server übermittelt. Wenn Sie unsere Website betrachten möchten,
                erheben wir die folgenden Daten, die für uns technisch
                erforderlich sind, um Ihnen unsere Website anzuzeigen und die
                Stabilität und Sicherheit zu gewährleisten (Rechtsgrundlage ist
                Art. 6 Abs. 1 S. 1 lit. f DS-GVO):
            </p>
            <ul>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>Zugriffsstatus/HTTP-Statuscode</li>
                <li>jeweils übertragene Datenmenge</li>
                <li>Website, von der die Anforderung kommt</li>
                <li>Browser</li>
                <li>Betriebssystem und dessen Oberfläche</li>
                <li>Sprache und Version der Browsersoftware</li>
            </ul>
            <p>
                (2) Diese Website setzt keine Cookies zu Analyse- oder
                Marketingzwecken ein und bindet keine Tracking- oder
                Analysedienste ein. Die verwendeten Schriftarten werden lokal
                von unserem eigenen Webspace ausgeliefert; es findet keine
                Verbindung zu Servern von Google oder anderen
                Schriftarten-Anbietern statt. Sollten wir künftig Cookies
                einsetzen, informieren wir Sie an dieser Stelle und holen,
                soweit erforderlich, Ihre Einwilligung ein (Rechtsgrundlage Art.
                6 Abs. 1 S. 1 lit. a DS-GVO).
            </p>

            <h2>Hosting</h2>
            <p>
                (1) Unsere Website wird bei dem externen Dienstleister Vercel
                Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
                (Hosting-Anbieter) gehostet. Der Hosting-Anbieter stellt die
                Infrastruktur und die technischen Ressourcen zur Verfügung, die
                erforderlich sind, um unsere Website sicher und zuverlässig zu
                betreiben. Im Rahmen der Nutzung unserer Website werden dabei
                die oben unter „Erhebung personenbezogener Daten bei Besuch
                unserer Website“ genannten Daten verarbeitet.
            </p>
            <p>
                (2) Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DS-GVO, da wir
                ein berechtigtes Interesse daran haben, unsere Website sicher
                und effizient zu betreiben.
            </p>
            <p>
                (3) Mit Vercel besteht eine Vereinbarung zur
                Auftragsverarbeitung nach Art. 28 DS-GVO
                (https://vercel.com/legal/dpa). Da Vercel seinen Sitz in den USA
                hat, kann es zu einer Übermittlung personenbezogener Daten in
                ein Land außerhalb des Europäischen Wirtschaftsraums (EWR)
                kommen. Diese Übermittlung erfolgt auf Grundlage der von der
                Europäischen Kommission genehmigten Standardvertragsklauseln
                (Art. 46 Abs. 2 lit. c DS-GVO).
            </p>
            <p>
                (4) Die Speicherung der Daten erfolgt nur so lange, wie es für
                den Betrieb der Website erforderlich ist oder bis gesetzliche
                Aufbewahrungsfristen ablaufen. Danach werden die Daten gelöscht.
            </p>

            <h2>Kontaktformular</h2>
            <p>
                (1) Bei der Nutzung unseres Kontaktformulars auf der Website
                werden personenbezogene Daten verarbeitet, um Ihre Anfragen zu
                bearbeiten und zu beantworten. Zu den erhobenen Daten gehören
                Ihr Name, Ihre E-Mail-Adresse, optional Ihre Telefonnummer, der
                Betreff und der Inhalt Ihrer Nachricht.
            </p>
            <p>
                (2) Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. b DS-GVO, wenn Ihre Anfrage mit einem Vertrag oder einer
                Vertragsanbahnung zusammenhängt, ansonsten auf Grundlage von
                Art. 6 Abs. 1 lit. f DS-GVO. Unser berechtigtes Interesse
                besteht in der effizienten Bearbeitung und Beantwortung Ihrer
                Anfragen.
            </p>
            <p>
                (3) Zur technischen Zustellung der über das Formular gesendeten
                Nachricht nutzen wir den E-Mail-Versanddienst Resend der Plus
                Five Five, Inc., 2261 Market Street #5039, San Francisco, CA
                94114, USA. Die von Ihnen im Formular eingegebenen Daten werden
                dabei an Resend übermittelt, damit die Nachricht zuverlässig an
                unser E-Mail-Postfach zugestellt werden kann. Mit Resend besteht
                eine Vereinbarung zur Auftragsverarbeitung nach Art. 28 DS-GVO
                (https://resend.com/legal/dpa).
            </p>
            <p>
                (4) Drittlandübermittlung: Da Resend seinen Sitz in den USA hat,
                kommt es zu einer Übermittlung personenbezogener Daten in ein
                Land außerhalb des Europäischen Wirtschaftsraums (EWR). Resend
                ist nach eigenen Angaben unter dem EU-US Data Privacy Framework
                zertifiziert (https://www.dataprivacyframework.gov/); zusätzlich
                sind die EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c
                DS-GVO) Bestandteil der Vereinbarung.
            </p>
            <p>
                (5) Die im Kontaktformular angegebenen Daten werden
                ausschließlich für die Bearbeitung Ihrer Anfrage und für
                mögliche Anschlussfragen verwendet. Diese Daten werden nicht
                ohne Ihre ausdrückliche Zustimmung an Dritte weitergegeben, mit
                Ausnahme der in Absatz 3 genannten technischen Zustellung.
            </p>
            <p>
                (6) Die Speicherung der personenbezogenen Daten erfolgt nur so
                lange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist
                oder bis gesetzliche Aufbewahrungsfristen ablaufen. Nach
                Erfüllung des Zwecks oder Ablauf der gesetzlichen
                Aufbewahrungsfristen werden die Daten gelöscht.
            </p>

            <h2>E-Mail-Postfach und Domain</h2>
            <p>
                (1) Für den Empfang von E-Mails, einschließlich der über das
                Kontaktformular gesendeten Nachrichten, nutzen wir ein
                E-Mail-Postfach bei IONOS SE, Elgendorfer Str. 57, 56410
                Montabaur. Auch die Domain dieser Website wird über IONOS
                verwaltet. Soweit wir E-Mail-Postfächer über IONOS betreiben,
                werden auch die Inhalte Ihrer E-Mails an uns auf den Servern des
                Anbieters verarbeitet. Die Speicherung erfolgt auf Servern
                innerhalb der Europäischen Union.
            </p>
            <p>
                (2) Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DS-GVO
                (sicherer und zuverlässiger Betrieb unserer Kommunikation);
                soweit Ihre Nachricht der Anbahnung oder Durchführung eines
                Vertrags dient, Art. 6 Abs. 1 S. 1 lit. b DS-GVO. Mit IONOS
                besteht eine Vereinbarung zur Auftragsverarbeitung nach Art. 28
                DS-GVO.
            </p>

            <h2>Telefon und WhatsApp</h2>
            <p>
                Wenn Sie uns telefonisch oder über WhatsApp kontaktieren,
                verarbeiten wir Ihre Rufnummer und die Inhalte der Kommunikation
                zur Bearbeitung Ihrer Anfrage (Rechtsgrundlage Art. 6 Abs. 1
                lit. b bzw. lit. f DS-GVO). Der WhatsApp-Button auf dieser
                Website öffnet lediglich WhatsApp auf Ihrem Gerät. Eine
                Datenübertragung an WhatsApp findet erst statt, wenn Sie dort
                eine Nachricht senden. Anbieter ist WhatsApp Ireland Limited,
                Merrion Road, Dublin 4, Irland. Dessen Datenschutzhinweise
                gelten dann zusätzlich.
            </p>

            <h2>Weitergabe im Rahmen einer Buchung</h2>
            <p>
                Wenn Sie über uns eine Reise buchen, geben wir die für die
                Buchung erforderlichen Daten (z. B. Name, Anschrift,
                Kontaktdaten, Reisedaten) an den jeweiligen Reiseveranstalter
                bzw. Leistungsträger weiter, gegebenenfalls über die
                Buchungssysteme unseres Partnerunternehmens amondo – Die
                Urlaubsprofis. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. b
                DS-GVO.
            </p>

            <h2>Social Media und Drittanbieter</h2>
            <p>
                (1) Wir verlinken auf dieser Website auf folgende
                Social-Media-Plattformen und Dienste: LinkedIn, Instagram,
                Facebook, Telegram und X. Auf den Seiten der Reiseberichte
                stellen wir zudem Teilen-Links für Facebook, Telegram und X
                bereit. Es handelt sich um reine Verlinkungen, nicht um
                eingebundene Plug-ins. Beim bloßen Besuch unserer Website werden
                dadurch keine personenbezogenen Daten an diese Anbieter
                übertragen. Erst wenn Sie einen Link anklicken, werden Sie auf
                die Seite des jeweiligen Anbieters weitergeleitet, und die unter
                „Erhebung personenbezogener Daten bei Besuch unserer Website“
                (Absatz 1) genannten Daten werden an den Anbieter übermittelt.
            </p>
            <p>
                (2) Wir haben weder Einfluss auf die erhobenen Daten und
                Datenverarbeitungsvorgänge, noch sind uns der volle Umfang der
                Datenerhebung, die Zwecke der Verarbeitung und die
                Speicherfristen der Anbieter bekannt. Die Anbieter speichern die
                über Sie erhobenen Daten teilweise als Nutzerprofile und nutzen
                diese für Zwecke der Werbung, Marktforschung und/oder
                bedarfsgerechten Gestaltung ihrer Angebote. Ihnen steht ein
                Widerspruchsrecht gegen die Bildung dieser Nutzerprofile zu,
                wobei Sie sich zur Ausübung dessen an den jeweiligen Anbieter
                wenden müssen. Wenn Sie bei dem Anbieter eingeloggt sind, können
                Ihre Daten direkt Ihrem dortigen Konto zugeordnet werden. Wir
                empfehlen Ihnen, sich vor dem Klick auf einen Link auszuloggen.
            </p>
            <p>
                (3) Rechtsgrundlage für die Verlinkung ist Art. 6 Abs. 1 S. 1
                lit. f DS-GVO. Soweit eine Einwilligung erforderlich sein
                sollte, ist Rechtsgrundlage Art. 6 Abs. 1 S. 1 lit. a DS-GVO.
            </p>
            <p>(4) Anbieter und weiterführende Datenschutzhinweise:</p>
            <ul>
                <li>
                    LinkedIn: LinkedIn Ireland Unlimited Company, Wilton Plaza,
                    Wilton Place, Dublin 2, Irland,
                    https://www.linkedin.com/legal/privacy-policy
                </li>
                <li>
                    Instagram und Facebook: Meta Platforms Ireland Limited, 4
                    Grand Canal Square, Dublin 2, Irland,
                    https://help.instagram.com/155833707900388 und
                    https://www.facebook.com/policy.php. Meta Platforms, Inc.
                    hat sich dem EU-US Data Privacy Framework unterworfen,
                    https://www.dataprivacyframework.gov/list.
                </li>
                <li>
                    Telegram: Telegram Messenger Inc., Datenschutzhinweise unter
                    https://telegram.org/privacy
                </li>
                <li>
                    X: X Internet Unlimited Company, One Cumberland Place,
                    Fenian Street, Dublin 2, D02 AX07, Irland,
                    https://x.com/de/privacy
                </li>
            </ul>
            <p>
                Wir können nicht ausschließen, dass personenbezogene Daten von
                Ihnen an die jeweiligen Anbieter übermittelt und dort, auch in
                den USA, gespeichert werden.
            </p>

            <h2>Dauer der Speicherung von personenbezogenen Daten</h2>
            <p>
                Personenbezogene Daten speichern wir gemäß den gesetzlichen
                Aufbewahrungsfristen (z. B. nach handels- und steuerrechtlichen
                Vorschriften). Nach Ablauf dieser Fristen werden die Daten
                gelöscht, es sei denn, sie sind weiterhin zur Erfüllung eines
                Vertrags erforderlich oder es besteht ein berechtigtes Interesse
                an ihrer weiteren Speicherung. Soweit oben keine ausdrückliche
                Speicherdauer angegeben wird, werden Ihre personenbezogenen
                Daten gelöscht oder gesperrt, sobald der Zweck oder die
                Rechtsgrundlage für die Speicherung entfällt.
            </p>
            <p>
                Eine Speicherung kann jedoch über die angegebene Zeit hinaus im
                Falle einer (drohenden) Rechtsstreitigkeit mit Ihnen oder eines
                sonstigen rechtlichen Verfahrens erfolgen oder wenn die
                Speicherung durch gesetzliche Vorschriften, denen wir als
                Verantwortliche unterliegen (z. B. § 257 HGB, § 147 AO),
                vorgesehen ist.
            </p>

            <h2>
                Widerspruch oder Widerruf gegen die Verarbeitung Ihrer Daten
            </h2>
            <p>
                (1) Falls Sie eine Einwilligung zur Verarbeitung Ihrer Daten
                erteilt haben, können Sie diese jederzeit widerrufen. Ein
                solcher Widerruf beeinflusst die Zulässigkeit der Verarbeitung
                Ihrer personenbezogenen Daten, nachdem Sie ihn gegenüber uns
                ausgesprochen haben.
            </p>
            <p>
                (2) Soweit wir die Verarbeitung Ihrer personenbezogenen Daten
                auf die Interessenabwägung stützen, können Sie Widerspruch gegen
                die Verarbeitung einlegen. Bei Ausübung eines solchen
                Widerspruchs bitten wir um Darlegung der Gründe, weshalb wir
                Ihre personenbezogenen Daten nicht wie von uns durchgeführt
                verarbeiten sollten. Im Falle Ihres begründeten Widerspruchs
                prüfen wir die Sachlage und werden entweder die
                Datenverarbeitung einstellen bzw. anpassen oder Ihnen unsere
                zwingenden schutzwürdigen Gründe aufzeigen, aufgrund derer wir
                die Verarbeitung fortführen.
            </p>
            <p>
                (3) Selbstverständlich können Sie der Verarbeitung Ihrer
                personenbezogenen Daten für Zwecke der Werbung und Datenanalyse
                jederzeit widersprechen. Über Ihren Werbewiderspruch können Sie
                uns unter folgenden Kontaktdaten informieren:{" "}
                {siteConfig.agentName}, {address.street}, {address.postalCode}{" "}
                {address.city},{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>

            <h2>Aktualität dieser Erklärung</h2>
            <p>
                Stand: 26. Oktober 2026. Wir passen diese Datenschutzerklärung
                an, wenn sich die Website, die von uns eingesetzten
                Dienstleister oder die rechtlichen Vorgaben ändern.
            </p>
        </LegalLayout>
    );
}
