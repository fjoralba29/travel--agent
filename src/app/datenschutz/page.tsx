// src/app/datenschutz/page.tsx

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
                {address.city},{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
            <p>
                <mark>
                    [Bitte prüfen: Adresse und Rechtsform (z. B.
                    Einzelunternehmerin / selbstständige Reiseberaterin)
                    bestätigen, bevor diese Seite veröffentlicht wird.]
                </mark>
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
                personenbezogenen Daten durch uns zu beschweren. Zuständig ist{" "}
                <mark>
                    [bitte prüfen: Der Landesbeauftragte für den Datenschutz und
                    die Informationsfreiheit Baden-Württemberg,
                    Lautenschlagerstraße 20, 70173 Stuttgart]
                </mark>
                .
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
                (2) Diese Website setzt derzeit keine Cookies zu Analyse- oder
                Marketingzwecken ein. Sollten künftig Cookies eingesetzt werden,
                informieren wir Sie an dieser Stelle und holen, soweit
                erforderlich, Ihre Einwilligung ein (Rechtsgrundlage Art. 6 Abs.
                1 S. 1 lit. a DS-GVO).
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
                Nachricht nutzen wir den E-Mail-Versanddienst{" "}
                <strong>Resend</strong> (Resend, Inc.,{" "}
                <mark>[Adresse von Resend, Inc. ergänzen]</mark>, USA). Die von
                Ihnen im Formular eingegebenen Daten werden dabei an Resend
                übermittelt, damit die Nachricht zuverlässig an unser
                E-Mail-Postfach zugestellt werden kann. Mit Resend besteht eine
                Vereinbarung zur Auftragsverarbeitung nach Art. 28 DS-GVO.{" "}
                <mark>
                    [Bitte bestätigen und ggf. Link zur Resend-DPA ergänzen, z.
                    B. https://resend.com/legal/dpa]
                </mark>
            </p>
            <p>
                (4) Drittlandübermittlung: Da Resend seinen Sitz in den USA hat,
                kann es im Rahmen des Versands zu einer Übermittlung
                personenbezogener Daten in ein Land außerhalb des Europäischen
                Wirtschaftsraums (EWR) kommen. Diese Übermittlung erfolgt auf
                Grundlage der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c
                DS-GVO).{" "}
                <mark>
                    [Bitte prüfen, ob Resend dem EU-US Data Privacy Framework
                    beigetreten ist, und ggf. ergänzen.]
                </mark>
            </p>
            <p>
                (5) Nach Zustellung wird die Nachricht in unserem
                E-Mail-Postfach bei unserem E-Mail-Anbieter{" "}
                <mark>[IONOS SE, Elgendorfer Str. 57, 56410 Montabaur]</mark>{" "}
                gespeichert. Die Speicherung erfolgt ausschließlich auf Servern
                innerhalb der Europäischen Union.
            </p>
            <p>
                (6) Die im Kontaktformular angegebenen Daten werden
                ausschließlich für die Bearbeitung Ihrer Anfrage und für
                mögliche Anschlussfragen verwendet. Diese Daten werden nicht
                ohne Ihre ausdrückliche Zustimmung an Dritte weitergegeben, mit
                Ausnahme der in Absatz 3 genannten technischen Zustellung.
            </p>
            <p>
                (7) Die Speicherung der personenbezogenen Daten erfolgt nur so
                lange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist
                oder bis gesetzliche Aufbewahrungsfristen ablaufen.
            </p>

            <h2>Telefon und WhatsApp</h2>
            <p>
                Wenn Sie uns telefonisch oder über WhatsApp kontaktieren,
                verarbeiten wir Ihre Rufnummer und die Inhalte der Kommunikation
                zur Bearbeitung Ihrer Anfrage. Der WhatsApp-Button auf dieser
                Website öffnet lediglich WhatsApp auf Ihrem Gerät. Eine
                Datenübertragung an WhatsApp findet erst statt, wenn Sie dort
                eine Nachricht senden. Anbieter ist WhatsApp Ireland Limited,
                Merrion Road, Dublin 4, Irland. Dessen Datenschutzhinweise
                gelten dann zusätzlich.
            </p>

            <h2>Hosting</h2>
            <p>
                (1) Unsere Website wird bei dem externen Dienstleister{" "}
                <strong>Vercel</strong> (Vercel Inc., 440 N Barranca Ave #4133,
                Covina, CA 91723, USA) gehostet. Der Hosting-Anbieter stellt die
                Infrastruktur und die technischen Ressourcen zur Verfügung, die
                erforderlich sind, um unsere Website sicher und zuverlässig zu
                betreiben.
            </p>
            <p>
                (2) Die Einholung und Verarbeitung personenbezogener Daten im
                Rahmen des Hostings erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
                f DS-GVO, da wir ein berechtigtes Interesse daran haben, unsere
                Website sicher und effizient zu betreiben.
            </p>
            <p>
                (3) Zu den im Rahmen des Hostings verarbeiteten Daten gehören
                die unter „Erhebung personenbezogener Daten bei Besuch unserer
                Website" genannten Daten.
            </p>
            <p>
                (4) Mit Vercel besteht eine Vereinbarung zur
                Auftragsverarbeitung nach Art. 28 DS-GVO. Da Vercel seinen Sitz
                in den USA hat, kann es zu einer Übermittlung personenbezogener
                Daten in ein Drittland kommen. Diese Übermittlung erfolgt auf
                Grundlage der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c
                DS-GVO).{" "}
                <mark>
                    [Bitte Link zur Vercel-DPA ergänzen, z. B.
                    https://vercel.com/legal/dpa]
                </mark>
            </p>

            <h2>E-Mail-Postfach</h2>
            <p>
                Für den Empfang von E-Mails, einschließlich über das
                Kontaktformular gesendeter Nachrichten, nutzen wir ein
                E-Mail-Postfach bei{" "}
                <mark>[IONOS SE, Elgendorfer Str. 57, 56410 Montabaur]</mark>.
                Für unser Postfach haben wir einen Serverstandort innerhalb der
                Europäischen Union gewählt. Rechtsgrundlage ist Art. 6 Abs. 1 S.
                1 lit. f DS-GVO; soweit eine Nachricht der Anbahnung oder
                Durchführung eines Vertrags dient, Art. 6 Abs. 1 S. 1 lit. b
                DS-GVO. Mit dem Anbieter besteht eine Vereinbarung zur
                Auftragsverarbeitung nach Art. 28 DS-GVO.
            </p>

            <h2>Social Media</h2>
            <p>
                (1) Auf dieser Website verlinken wir auf unser Instagram-Profil.
                Beim bloßen Besuch unserer Website werden dadurch keine Daten an
                Instagram übertragen. Erst wenn Sie den Link anklicken, werden
                Sie auf die Seite des Anbieters weitergeleitet und die unter
                „Erhebung personenbezogener Daten bei Besuch unserer Website"
                genannten Daten werden an den Anbieter übermittelt.
            </p>
            <p>
                (2) Anbieter ist Meta Platforms Ireland Limited, 4 Grand Canal
                Square, Dublin 2, Irland. Weitere Informationen zu Zweck und
                Umfang der Datenerhebung erhalten Sie unter{" "}
                https://www.facebook.com/policy.php. Meta Platforms, Inc. hat
                sich dem EU-US Data Privacy Framework unterworfen,
                https://www.dataprivacyframework.gov/list.
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
                verarbeiten sollten.
            </p>
            <p>
                (3) Sie können uns unter folgenden Kontaktdaten über Ihren
                Widerspruch informieren: {siteConfig.agentName},{" "}
                {address.street}, {address.postalCode} {address.city},{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>

            <h2>Aktualität dieser Erklärung</h2>
            <p>
                Stand: <mark>[Monat Jahr eintragen]</mark>. Wir passen diese
                Datenschutzerklärung an, wenn sich die Website, die von uns
                eingesetzten Dienstleister oder die rechtlichen Vorgaben ändern.
            </p>
        </LegalLayout>
    );
}
