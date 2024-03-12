export default {
    common: {
        title: "Mutiny Wallet",
        mutiny: "Mutiny",
        nice: "Schön",
        home: "Home",
        e_sats: "eSATS",
        e_sat: "eSAT",
        sats: "SATS",
        sat: "SAT",
        fee: "Gebühren",
        send: "Senden",
        receive: "Erhalten",
        dangit: "Mist",
        back: "Zurück",
        coming_soon: "(demnächst)",
        copy: "Kopieren",
        copied: "Kopiert",
        continue: "Weiter",
        error_unimplemented: "Nicht implementiert",
        why: "Warum?",
        private_tags: "Private Schlagwörter",
        view_transaction: "Transaction anzeigen",
        view_payment_details: "Zahlungsdetails anzeigen",
        pending: "Ausstehend",
        error_safe_mode:
            "Mutiny läuft im Safemode. Lightning ist deaktiviert.",
        self_hosted: "Selbst gehostet"
    },
    contacts: {
        new: "neu",
        add_contact: "Kontakt hinzufügen",
        new_contact: "Neuer Kontakt",
        create_contact: "Kontakt hinzufügen",
        edit_contact: "Kontakt bearbeiten",
        save_contact: "Kontakt speichern",
        delete: "Löschen",
        confirm_delete: "Bist du sicher, dass der Kontakt gelöscht werden soll?",
        payment_history: "Zahlungshistorie",
        no_payments: "Bisher keine Zahlungen mit",
        edit: "Ändern",
        pay: "Bezahlen",
        name: "Name",
        ln_address: "Lightning Adresse",
        placeholder: "Satoshi",
        lightning_address: "Lightning Adresse",
        unimplemented: "Nicht implementiert",
        not_available: "Noch nicht verfügbar",
        error_name: "Wir benötigen mindestens einen Namen",
        email_error: "Das sieht nicht nach einer Lightning Adresse aus",
        npub_error: "Das sieht nicht nach einem Nostr npub aus",
        error_ln_address_missing: "Neue Kontakte benötigen eine Lightning Adresse",
        npub: "Nostr Npub",
        link_to_nostr_sync: "Nostr Kontakte importieren"
    },
    redeem: {
        redeem_bitcoin: "Bitcoin einlösen",
        lnurl_amount_message:
            "Auszubezahlender Betrag zwischen {{min}} und {{max}} Sats eingeben",
        lnurl_redeem_failed: "Auszahlung abgebrochen",
        lnurl_redeem_success: "Zahlung erhalten"
    },
    receive: {
        receive_bitcoin: "Bitcoin erhalten",
        edit: "Bearbeiten",
        checking: "Überprüfung",
        choose_format: "Format wählen",
        payment_received: "Zahlung erhalten",
        payment_initiated: "Zahlung initiiert",
        receive_add_the_sender: "Absenderinformationen hinzufügen",
        keep_mutiny_open: "Bitte Mutiny geöffnet lassen, um die Zahlung abzuschliessen.",
        choose_payment_format: "Zahlungsformat auswählen",
        unified_label: "Kombiniert",
        unified_caption:
            "Kombiniert eine Bitcoin Adresse mit einer Lightning Rechnung. Der Sender wählt die Zahlungsmethode.",
        lightning_label: "Lightning Rechnung",
        lightning_caption:
            "Ideal für kleine Beträge. In der Regel mit geringeren Gebühren als eine On-chain Transaktion.",
        onchain_label: "Bitcoin Adresse",
        onchain_caption:
            "On-chain Transaktion, wie es Satoshi getan hat. Ideal für sehr grosse Beträge.",
        unified_setup_fee:
            "Bei einer Zahlung über Lightning wird eine Einrichtungsgebühr von {{amount}} SATS verrechnet.",
        lightning_setup_fee:
            "Beim Erhalten einer Zahlung wird eine Lightning Einrichtungsgebühr von {{amount}} SATS verrechnet.",
        amount: "Betrag",
        fee: "+ Gebühr",
        total: "Total",
        spendable: "Verfügbar",
        channel_size: "Kanalgrösse",
        channel_reserve: "- Kanalreserve",
        error_under_min_lightning:
            "Standardmässig über On-chain. Betrag ist zu klein für den Empfang deiner initiale Lightningzahlung.",
        error_creating_unified:
            "Standardmässig über On-chain. Etwas ist schief gelaufen bei der Erstellung einer einheitlichen Adresse",
        error_creating_address:
            "Etwas ist schief gelaufen bei der Erstellung einer On-chain Adresse",
        amount_editable: {
            receive_too_small:
                "Eine Lightning Einrichtungsgebühr wird möglicherweise vom angeforderten Betrag abgezogen.",
            setup_fee_lightning:
                "Beim Bezahlen über Lightning wird eine Einrichtungsgebühr fällig.",
            more_than_21m: "Es gibt nur 21 Millionen Bitcoin.",
            set_amount: "Bestimme den Betrag",
            max: "MAX",
            fix_amounts: {
                ten_k: "10k",
                one_hundred_k: "100k",
                one_million: "1m"
            },
            del: "LÖSCHEN",
            balance: "Kontostand"
        },
        integrated_qr: {
            onchain: "On-chain",
            lightning: "Lightning",
            unified: "Kombiniert",
            gift: "Lightning Geschenk"
        },
        remember_choice: "Auswahl merken",
        what_for: "Wozu?"
    },
    send: {
        search: {
            placeholder: "Name, Adresse, Rechnung",
            paste: "Einfügen",
            contacts: "Kontakte",
            global_search: "Globale Suche",
            no_results: "Keine Resultate für"
        },
        sending: "Senden...",
        confirm_send: "Sendung bestätigt",
        contact_placeholder: "Empfänger speichern",
        start_over: "Start über",
        send_bitcoin: "Bitcoin senden",
        paste: "Einfügen",
        scan_qr: "QR scannen",
        payment_initiated: "Zahlung initiiert",
        payment_sent: "Zahlung gesendet",
        destination: "Ziel",
        no_payment_info: "Keine Zahlungsinfo",
        progress_bar: {
            of: "von",
            sats_sent: "Sats gesendet"
        },
        what_for: "Wozu?",
        zap_note: "Zap Notiz",
        error_low_balance:
            "Der Kontostand ist zu niedrig, um den Betrag zu überweisen.",
        error_invoice_match:
            "Angeforderter Betrag, {{amount}} SATS, ist nicht identisch mit dem gesetzten Betrag.",
        error_channel_reserves: "Kontostand zu niedrig.",
        error_address: "Ungültige Lightning Adresse",
        error_channel_reserves_explained:
            "Ein Teil deines Kontostands ist reserviert für Gebühren. Versuche kleinere Beträge zu senden oder den Kontostand zu erhöhen.",
        error_clipboard: "Zwischenablage wird nicht unterstützt",
        error_keysend: "Sendung fehlgeschlagen",
        error_LNURL: "LNURL Bezahlung fehlgeschlagen",
        error_expired: "Rechnung ist abgelaufen",
        payjoin_send:
            "Das ist ein Payjoin! Die Meuterei wird so lange andauern, bis sich die Privatsphäre verbessert",
        payment_pending: "Zahlung ausstehend",
        payment_pending_description:
            "Es dauert eine Weile, aber es ist immer noch möglich, dass die Zahlung durchgeht. Bitte bei 'Aktivitäten' den aktuellen Status prüfen.",
        hodl_invoice_warning:
            "Das ist eine Hodl Rechnung. Zahlungen zu Hodl Rechnungen kann zu Schliessungen von Kanälen mit hohen On-chain Gebühren führen. Bezahlung auf eigenes Risiko!",
        private: "Privat",
        anonzap: "Anon Zap"
    },
    feedback: {
        header: "Lasse uns dein Feedback da!",
        received: "Feedback erhalten!",
        thanks: "Danke, dass du uns wissen lässt, was läuft.",
        more: "Hast du noch mehr zu sagen?",
        tracking:
            "Mutiny verfolgt oder spioniert dein Verhalten nicht aus, daher ist dein Feedback unglaublich hilfreich.",
        github: "Wir werden auf dein Feedback nicht antworten. Wenn du Unterstützung benötigst, bitte melden",
        create_issue: "Ein GitHub-Problem erstellen.",
        link: "Feedback?",
        feedback_placeholder: "Fehler, Funktionswünsche, Feedback, etc.",
        info_label: "Kontaktinformationen angeben",
        info_caption: "Wenn du möchtest, dass wir dieses Problem weiterverfolgen",
        email: "Email",
        email_caption: "Burners willkommen",
        nostr: "Nostr",
        nostr_caption: "Deine neuste npub",
        nostr_label: "Nostr npub oder NIP-05",
        send_feedback: "Feedback senden",
        invalid_feedback: "Bitte sage etwas!",
        need_contact: "Wir benötigen eine Möglichkeit, um dich zu kontaktieren",
        invalid_email: "Das sieht nicht nach einer Email-Adresse aus",
        error: "Fehler beim Senden des Feedbacks {{error}}",
        try_again: "Bitte versuche es später nochmals."
    },
    activity: {
        title: "Aktivität",
        mutiny: "Mutiny",
        wallet: "Wallet",
        nostr: "Nostr",
        view_all: "Alle anzeigen",
        receive_some_sats_to_get_started: "Sats erhalten, um zu starten",
        channel_open: "Kanal öffnen",
        channel_close: "Kanal schliessen",
        unknown: "Unbekannt",
        import_contacts:
            "Kontakte von Nostr importieren, um zu sehen wer dir etwas zappt.",
        coming_soon: "Demnächst",
        private: "Privat",
        anonymous: "Anonym",
        from: "Von:",
        transaction_details: {
            lightning_receive: "Erhalten via Lightning",
            lightning_send: "Gesendet via Lightning",
            channel_open: "Kanal öffnen",
            channel_close: "Kanal schliessen",
            onchain_receive: "On-chain erhalten",
            onchain_send: "On-chain gesendet",
            paid: "Bezahlt",
            unpaid: "Unbezahlt",
            status: "Status",
            date: "Datum",
            tagged_to: "Markiert mit",
            description: "Beschreibung",
            fee: "Gebühr",
            onchain_fee: "On-chain Gebühr",
            invoice: "Rechnung",
            payment_hash: "Zahlungs-Hash",
            payment_preimage: "Urbild",
            txid: "Txid",
            total: "Betrag angefordert",
            balance: "Kontostand",
            reserve: "Reserve",
            peer: "Peer",
            channel_id: "Kanal ID",
            reason: "Grund",
            confirmed: "Bestätigt",
            unconfirmed: "Unbestätigt",
            sweep_delay:
                "Es kann einige Tage dauern, bis deine Einlagen wieder in der Wallet verfügbar sind",
            no_details:
                "Keine Kanaldetails gefunden, was bedeutet, dass dieser Kanal wahrscheinlich geschlossen wurde.",
            back_home: "zurück zur Startseite"
        }
    },
    scanner: {
        paste: "Füge etwas ein",
        cancel: "Abbrechen"
    },
    settings: {
        header: "Einstellungen",
        support: "Lerne wie du Mutiny unterstützen kannst",
        experimental_features: "Experimente",
        debug_tools: "DEBUG TOOLS",
        danger_zone: "Gefahrenzone",
        general: "Allgemein",
        version: "Version:",
        admin: {
            title: "Admin Seite",
            caption: "Unsere internen Debug-Tools. Verwende sie mit Bedacht!",
            header: "Geheime Debug Tools",
            warning_one:
                "Wenn du weisst was du tust, bist du am richtigen Ort.",
            warning_two:
                "Das sind interne Tools, die wir fürs Debuggen und Testen der App verwenden. Bitte vorsichtig sein!",
            kitchen_sink: {
                disconnect: "Trennen",
                peers: "Peers",
                no_peers: "Keine Peers",
                refresh_peers: "Peers aktualisieren",
                connect_peer: "Peer verbinden",
                expect_a_value: "Ein Wert wird erwartet...",
                connect: "Verbinden",
                close_channel: "Kanal schliessen",
                force_close: "Kanal schliessen erzwingen",
                abandon_channel: "Kanal verlassen",
                confirm_close_channel:
                    "Bist du sicher, dass du den Kanal schliessen willst?",
                confirm_force_close:
                    "Bist du sicher, dass du die Kanalschliessung erzwingen willst? Deine Einlagen benötigen ein paar Tage, bis sie On-chain verfügbar sind.",
                confirm_abandon_channel:
                    "Bist du sicher, dass du diesen Kanal verlassen willst? Typischerweise wird diese Aktion nur ausgeführt, wenn die eröffnende Transaktion nicht bestätigt werden kann. Andernfalls wirst du deine Einlagen verlieren.",
                channels: "Kanäle",
                no_channels: "Keine Kanäle",
                refresh_channels: "Kanäle aktualisieren",
                pubkey: "Pubkey",
                amount: "Betrag",
                open_channel: "Kanal eröffnen",
                nodes: "Nodes",
                no_nodes: "Keine Nodes",
                enable_zaps_to_hodl: "Zaps nach hodl invoices erlauben?",
                zaps_to_hodl_desc:
                    "Zaps nach hodl invoices kann zu erzwungenen Kanalschliessungen und hohen On-chain Gebühren führen. Benutzung auf eigene Gefahr!",
                zaps_to_hodl_enable: "Hodl Zaps aktivieren",
                zaps_to_hodl_disable: "Hodl Zaps deaktivieren"
            }
        },
        backup: {
            title: "Backup",
            secure_funds: "Sorgen wir dafür, dass deine Einlagen gesichert werden.",
            twelve_words_tip:
                "Wir werden dir 12 Wörter zeigen. Du schreibst die 12 Wörter auf.",
            warning_one:
                "Wenn du deine Browser-Historie löschst oder dein Gerät verlierst sind diese 12 Wörter der einzige Weg, um dein Wallet wiederherzustellen.",
            warning_two: "Mutiny ist eine selbst verwahrende Wallet. Du allein bist dafür verantwortlich...",
            confirm: "Ich habe die Wörter aufgeschrieben",
            responsibility: "Ich bin mir bewusst, dass meine Einlagen in meiner Verantwortung sind",
            liar: "Ich lüge nicht, nur um das hinter mich zu bringen",
            seed_words: {
                reveal: "TIPPE, UM DIE SEED-WÖRTER ZU ENTDECKEN",
                hide: "VERSTECKEN",
                copy: "Gefährliches Kopieren in die Zwischenablage",
                copied: "Kopiert!"
            }
        },
        channels: {
            title: "Lightning Kanäle",
            outbound: "Outbound",
            inbound: "Inbound",
            reserve: "Reserve",
            have_channels: "Du hast",
            have_channels_one: "Lightning Kanal.",
            have_channels_many: "lightning Kanäle.",
            inbound_outbound_tip:
                "Outbound ist der Betrag, den du über Lightning ausgeben kannst. Inbound ist der Betrag, den du über Lightning empfangen kannst ohne eine Lightning Servicegebühr zu bezahlen.",
            reserve_tip:
                "Um die 1% deines Kontostandes ist reserviert, um Lightning Gebühren zu bezahlen. Zusätzliche Reserven sind nötig, um Kanäle via Swap zu öffnen.",
            no_channels:
                "Anscheinend hast du noch keine Kanäle. Erhalte ein paar Sats über Lightning, um zu starten. Oder transferiere ein paar on-chain Bitcoin in einen Lightning Kanal. Mache ruhig deine Hände schmutzig!",
            close_channel: "Schliessen",
            online_channels: "Online Kanäle",
            offline_channels: "Offline Kanäle",
            close_channel_confirm:
                "Wenn der Kanal geschlossen wird, werden die Einlagen nach on-chain transferiert. Dies führt zu einer on-chain Gebühr."
        },
        connections: {
            title: "Wallet Verbindungen",
            error_name: "Name kann nicht leer sein",
            error_connection: "Wallet Verbindung konnte nicht erstellt werden",
            error_budget_zero: "Der Budgetrahmen muss grösser sein als 0",
            add_connection: "Verbindung hinzufügen",
            manage_connections: "Verbindungen verwalten",
            manage_gifts: "Geschenke verwalten",
            delete_connection: "Löschen",
            new_connection: "Neue Verbindung",
            edit_connection: "Verbindung bearbeiten",
            new_connection_label: "Name",
            new_connection_placeholder: "Mein Lieblings-Nostr-Client...",
            create_connection: "Verbindung erstellen",
            save_connection: "Änderungen speichern",
            edit_budget: "Budgetrahmen bearbeiten",
            open_app: "App öffnen",
            open_in_nostr_client: "In Nostr-Client öffnen",
            open_in_primal: "In Primal öffnen",
            nostr_client_not_found: "Nostr-Client konnte nicht gefunden werden",
            client_not_found_description:
                "Installiere einen Nostr-Client wie Primal, Amethyst oder Damus, um den Link zu öffnen.",
            relay: "Relais",
            authorize:
                "Autorisiere externe Dienste, um Zahlungen von deinem Wallet anzufordern. Passt hervorragend zu Nostr-Clients.",
            pending_nwc: {
                title: "Offene Anfragen",
                approve_all: "Alle genehmigen",
                deny_all: "Alle ablehnen"
            },
            careful:
                "Vorsicht beim Teilen dieser Verbindung! Anfragen innerhalb des Budgetrahmens werden automatisch bezahlt.",
            spent: "Ausgegeben",
            remaining: "Übrig",
            confirm_delete: "Bist du sicher, dass du diese Verbindung löschen willst?",
            budget: "Budgetrahmen",
            resets_every: "Alles zurücksetzen",
            resubscribe_date: "Erneut abonnieren"
        },
        emergency_kit: {
            title: "Notfallbausatz",
            caption: "Probleme im Wallet diagnostizieren und lösen.",
            emergency_tip:
                "Wenn deine Wallet nicht mehr läuft, findest du hier ein paar Werkzeuge, um es zu debuggen und reparieren.",
            questions:
                "Bitte melde dich, wenn du Fragen dazu hast, was diese Buttons tun",
            link: "melde dich bei uns für Unterstützung.",
            import_export: {
                title: "Wallet-Status exportieren",
                error_password: "Passwort wird benötigt",
                error_read_file: "Fehler beim Lesen der Datei",
                error_no_text: "Keinen Text in der Datei gefunden",
                tip: "Du kannst deinen gesamten Status aus der Mutiniy-Wallet als Datei exportieren and sie in einem neuen Browser importieren. Normalerweise funktioniert es!",
                caveat_header: "Wichtige Vorbehalte:",
                caveat: " Nach dem Exportieren bitte keine Operationen mehr im originalen Browser vornehmen. Wenn doch, musst du den Export nochmals durchführen. Nach einem erfolgreichen Import wird empfohlen den Status im originalen Browser zu löschen. So wird sichergestellt, dass es keine Konflikte gibt.",
                save_state: "Status als Datei speichern",
                import_state: "Status aus einer Datei importieren",
                confirm_replace: "Möchtest du deinen Status ersetzen mit",
                password: "Passwort eingeben, um zu entschlüsseln",
                decrypt_wallet: "Wallet entschlüsseln"
            },
            logs: {
                title: "Debug-Protokolle herunterladen",
                something_screwy:
                    "Irgendetwas Verrücktes ist im Gange? Bitte schaue das Protokoll an!",
                download_logs: "Protokolle herunterladen",
                password: "Passwort eingeben, um zu entschlüsseln",
                confirm_password_label: "Passwort bestätigen"
            },
            delete_everything: {
                delete: "Alles löschen",
                confirm:
                    "Damit löschst du den Status deiner Node. Das kann nicht rückgängig gemacht werden!",
                deleted: "Gelöscht",
                deleted_description: "Alle Daten gelöscht"
            }
        },
        encrypt: {
            title: "Passwort ändern",
            caption: "Bitte zuerst ein Backup erstellen, um die Verschlüsselung zu entsperren",
            header: "Deine Seed-Wörter entschlüsseln",
            hot_wallet_warning:
                'Mutiny ist eine "Hot Wallet". Um zu funktionieren, benötigt es deine Seed-Wörter. Du kannst aber optional deine Seed-Wörter mit einem Passwort verschlüsseln.',
            password_tip:
                "Auf diese Weise hat jemand, der Zugriff auf deinen Browser erhält, immer noch keinen Zugriff auf dein Geld.",
            optional: "(optional)",
            existing_password: "Bestehendes Passwort",
            existing_password_caption:
                "Leer lassen, wenn du noch kein Passwort gesetzt hast.",
            new_password_label: "Passwort",
            new_password_placeholder: "Ein Passwort eingeben",
            new_password_caption:
                "Dieses Passwort wird genutzt, um deine Seed-Wörter zu verschlüsseln. Wenn du es vergisst, musst du deine Seed-Wörter wieder eingeben, um an deine Einlagen zu gelangen. Du hast deine Seed-Wörter aufgeschrieben, oder?",
            confirm_password_label: "Passwort bestätigen",
            confirm_password_placeholder: "Passwort wiederholen",
            encrypt: "Verschlüsseln",
            skip: "Überspringen",
            error_match: "Passwort stimmt nicht überein",
            error_same_as_existingpassword:
                "Das neue Passwort darf nicht mit dem bestehenden Passwort übereinstimmen"
        },
        decrypt: {
            title: "Passwort eingeben",
            decrypt_wallet: "Wallet entschlüsseln",
            forgot_password_link: "Passwort vergessen?",
            error_wrong_password: "Passwort ungültig"
        },
        currency: {
            title: "Währung",
            caption: "Wähle dein bevorzugtes Währungspaar",
            select_currency: "Währung auswählen",
            select_currency_label: "Währungspaar",
            select_currency_caption:
                "Wenn du eine neue Währung auswählst, wird das Wallet neu synchronisiert und die Preise aktualisiert",
            request_currency_support_link:
                "Unterstützung anfordern für weitere Währungen",
            error_unsupported_currency: "Bitte eine unterstützte Währung auswählen."
        },
        language: {
            title: "Sprache",
            caption: "Wähle deine bevorzugte Sprache",
            select_language: "Sprache auswählen",
            select_language_label: "Sprache",
            select_language_caption:
                "Wenn du eine neue Sprache auswählst, wird die Sprache in der Wallet geändert, unabhängig davon welche Sprache dein Browser verwendet",
            request_language_support_link: "Fordere Unterstützung für weitere Sprachen an",
            error_unsupported_language: "Bitte eine unterstützte Sprache auswählen."
        },
        lnurl_auth: {
            title: "LNURL Auth",
            auth: "Auth",
            expected: "Erwarte etwas wie LNURL..."
        },
        plus: {
            title: "Mutiny+",
            join: "Mitmachen",
            sats_per_month: "für {{amount}} Sats im Monat.",
            lightning_balance:
                "Du benötigst mindestens {{amount}} Sats in deiner Lightning Wallet, um zu starten. Probiere es aus bevor du kaufst!",
            restore: "Abonnement wiederherstellen",
            ready_to_join: "Bereit zum Mitmachen",
            click_confirm: "Klicke auf bestätigen, um deinen ersten Monat zu bezahlen.",
            open_source: "Mutiny ist Open Source und selbstverwahrend.",
            optional_pay: "Aber du kannst auch dafür bezahlen.",
            paying_for: "Dafür bezahlen",
            supports_dev:
                "unterstützt die laufende Entwicklung und ermöglicht den frühzeitigen Zugriff auf neue Features und Premium-Funktionalitäten:",
            thanks: "Du bist Teil von Mutiny! Genieße die folgenden Vorteile:",
            renewal_time: "Du erhältst eine Zahlungsaufforderung für die Verlängerung",
            cancel: "Um dein Abonnement zu beenden, bezahle einfach nicht mehr. Du kannst Mutiny+ auch deaktivieren",
            wallet_connection: "Wallet Verbindung.",
            subscribe: "Einschreiben",
            error_no_plan: "Kein Abonnement gefunden",
            error_failure: "Konnte nicht abonniert werden",
            error_no_subscription: "Kein bestehendes Abonnement gefunden",
            error_expired_subscription:
                "Dein Abonnement ist abgelaufen, klicke auf Mitmachen, um es zu erneuern",
            satisfaction: "Selbstgefällige Zufriedenheit",
            gifting: "Schenken",
            multi_device: "Zugriff mit mehreren Geräten",
            ios_testflight: "Zugang zu iOS TestFlight",
            more: "... und es wird noch mehr kommen",
            cta_description:
                "Genieße frühzeitigen Zugriff auf neue Features und Premium-Funktionalitäten.",
            cta_but_already_plus: "Danke für deinen Support!"
        },
        restore: {
            title: "Wiederherstellen",
            all_twelve: "Du musst alle 12 Wörter eingeben",
            wrong_word: "Falsches Wort",
            paste: "Gefährliches Eingeben von der Zwischenablage",
            confirm_text:
                "Bist du sicher, dass du diese Wallet wiederherstellen willst? Deine bestehende Wallet wird gelöscht!",
            restore_tip:
                "Du kannst eine bestehende Mutiny Wallet mit deinen 12 Wörtern wiederherstellen. Das wird deine bestehende Wallet ersetzen, sei dir also sicher was du tust!",
            multi_browser_warning:
                "Bitte nicht verschiedene Browser gleichzeitig nutzen.",
            error_clipboard: "Zwischenablage wird nicht unterstützt",
            error_word_number: "Falsche Anzahl Wörter",
            error_invalid_seed: "Ungültige Seed Phrase"
        },
        servers: {
            title: "Server",
            caption: "Vertraue uns nicht! Nutze deine eigenen Server, um Mutiny zu verwenden.",
            link: "Lerne mehr über die Selbstverwahrung",
            proxy_label: "Websockets Proxy",
            proxy_caption:
                "Wie deine Lightning Node mit dem rest des Netzwerks kommuniziert.",
            error_proxy: "Sollte eine URL sein, die mit wss:// beginnt",
            esplora_label: "Esplora",
            esplora_caption: "Block-Daten für On-chain Informationen.",
            error_esplora: "Das sieht nicht nach einer gültigen URL aus",
            rgs_label: "RGS",
            rgs_caption:
                "Rapid Gossip Sync. Netzwerkdaten über das Lightning Netzwerk benutzt für das Routing.",
            error_rgs: "Das sieht nicht nach einer gültigen URL aus",
            lsp_label: "LSP",
            lsp_caption:
                "Lightning Service Provider. Automatisches Eröffnen von Kanälen, um deine Inbound Liquidität sicherzustellen. Verpackt auch Rechnungen, um den Datenschutz zu gewähren.",
            lsps_connection_string_label: "LSPS Connection String",
            lsps_connection_string_caption:
                "Lightning Service Provider. Automatisches Eröffnen von Kanälen, um deine Inbound Liquidität sicherzustellen. Genutzt werden LSP Spezifikationen.",
            error_lsps_connection_string:
                "Das sieht nicht nach einem Node Connection String aus",
            lsps_token_label: "LSPS Token",
            lsps_token_caption:
                "LSPS Token.  Wird benutzt, um zu identifizieren welche Wallet sich mit dem LSP verbindet",
            lsps_valid_error:
                "Du kannst entweder ein LSP-Set oder LSPS Connection String und LSPS Token-Set haben, nicht beides.",
            error_lsps_token: "Das sieht nicht nach einem validen Token aus",
            storage_label: "Lagerung",
            storage_caption: "Encrypted VSS Backup Service.",
            error_lsp: "Das sieht nicht nach einer gültigen URL aus",
            save: "Speichern"
        },
        nostr_contacts: {
            title: "Sync Nostr Kontakte",
            npub_label: "Nostr npub",
            npub_required: "Npub darf nicht leer sein",
            sync: "Sync",
            resync: "Resync",
            remove: "Entfernen"
        },
        manage_federations: {
            title: "Federationen verwalten",
            federation_code_label: "Federation Code",
            federation_code_required: "Federation Code darf nicht leer sein",
            federation_added_success: "Federation erfolgreich hinzugefügt",
            federation_remove_confirm:
                "Bist du sicher, dass du diese Federation enfernen willst? Stelle zuerst sicher, dass all deine Einlagen auf deine Lightning Wallet transferiert wurden.",
            add: "Hinzufügen",
            remove: "Entfernen",
            expires: "Läuft ab",
            federation_id: "Federation ID",
            description:
                "Mutiny unterstützt experimentell das Fedimint Protocoll. Du benötigst einen Einladungscode einer Federation, damit du diese Funktion nutzen kannst. Diese Einlagen sind zur Zeit aus der Ferne nicht gesichert. Das Speichern von Geld in einer Federation geschieht auf eigene Gefahr!",
            learn_more: "Lerne mehr über Fedimint."
        },
        gift: {
            give_sats_link: "Verschenke Sats als Geschenk",
            title: "Verschenken",
            no_plus_caption: "Upgrade auf Mutiny+ um Verschenken zu aktivieren",
            receive_too_small:
                "Deine erste Einzahlung muss mindestens {{amount}} SATS oder grösser sein.",
            setup_fee_lightning:
                "Eine Lightning Einrichtungsgebühr wird beim Erhalten des Geschenks verrechnet.",
            already_claimed: "Dieses Geschenk wurde bereits eingelöst",
            sender_is_poor:
                "Der Kontostand des Senders ist nicht gross genug, um das Geschenk zu bezahlen.",
            sender_timed_out:
                "Bezahlung des Geschenks ist abgelaufen. Der Sender ist vielleicht Offline, oder das Geschenk wurde bereits eingelöst.",
            sender_generic_error: "Sender hat folgenden Fehler gesendet: {{error}}",
            receive_header: "Dir hat jemand ein paar Sats geschenkt!",
            receive_description:
                "Du musst etwas Spezielles sein. Um das Geld einzulösen, musst du nur den grossen Knopf drücken. Das Geld wird deiner Wallet hinzugefügt, sobald der Schenkende das nächste Mal online ist.",
            receive_claimed:
                "Geschenk eingelöst! Du solltest das Geschenk demnächst in deinem Kontostand sehen.",
            receive_cta: "Geschenk einlösen",
            receive_try_again: "Nochmals versuchen",
            send_header: "Geschenk erstellen",
            send_explainer:
                "Übergebe das Geschenk gefüllt mit Sats. Erstelle eine Mutiny Geschenk-URL, die von jedem über einen Web-Browser eingelöst werden kann.",
            send_name_required: "Das ist für deine Historie",
            send_name_label: "Name des Empfängers",
            send_header_claimed: "Geschenk erhalten!",
            send_claimed: "Dein Geschenk wurde eingelöst. Danke fürs Teilen.",
            send_sharable_header: "URL zum Teilen",
            send_instructions:
                "Bitte diese Geschenk-URL deinem Empfänger senden, oder frage ihn, ob er diesen QR-Code mit seiner Wallet scannen kann.",
            send_another: "Einen Weiteren erstellen",
            send_small_warning:
                "Ein brandneuer Mutiny-Benutzer wird nicht fähig sein weniger als 100k Sats einzulösen.",
            send_cta: "Ein Geschenk erstellen",
            send_delete_button: "Geschenk löschen",
            send_delete_confirm:
                "Bist du sicher, dass du dieses Geschenk löschen willst? Ist das dein Rugpull-Moment?",
            send_tip:
                "Damit das Geschenk eingelöst werden kann, muss deine Mutiny Wallet geöffnet sein.",
            need_plus:
                "Upgrade auf Mutiny+, um Schenken zu aktivieren. Durch Schenken kannst du eine Mutiny Geschenk-URL erstellen, die von jedem mit einem Webbrowser eingelöst werden kann."
        }
    },
    swap: {
        peer_not_found: "Peer nicht gefunden",
        channel_too_small:
            "Es ist nicht klug einen Kanal zu eröffnen, der kleiner als {{amount}} Sats ist",
        insufficient_funds: "Du hast nicht genügend Geld, um den Kanal zu eröffnen",
        header: "Tausche in Lightning",
        initiated: "Wechsel initialisiert",
        sats_added: "+{{amount}} Sats werden deiner Lightning Wallet hinzugefügt",
        use_existing: "Bitte den bestehenden Peer nutzen",
        choose_peer: "Einen Peer wählen",
        peer_connect_label: "Zu einem neuen Peer verbinden",
        peer_connect_placeholder: "Peer Verbindgungs-String",
        connect: "Verbinden",
        connecting: "wird verbunden...",
        confirm_swap: "Tausch bestätigen"
    },
    swap_lightning: {
        insufficient_funds: "Du hast nicht genug Geld, um nach Lightning zu wechseln",
        header: "Tausche nach Lightning",
        header_preview: "Vorschau des Tausches",
        completed: "Tausch ausgeführt",
        too_small:
            "Ungültiger Betrag eingegeben. Zum Tauschen benötigst du mindestens 100k Sats.",
        sats_added:
            "+{{amount}} Sats wurden deiner Lightning Wallet hinzugefügt",
        sats_fee: "+{{amount}} Sats Gebühren",
        confirm_swap: "Tausch bestätigen",
        preview_swap: "Vorschau der Tauschgebühr"
    },
    reload: {
        mutiny_update: "Mutiny Update",
        new_version_description:
            "Neue Version von Mutiny wurde zwischengespeichert, Lade die App neu, um sie zu verwenden.",
        reload: "Neu laden"
    },
    error: {
        title: "Fehler",
        emergency_link: "Notfall-Kit.",
        reload: "Neu laden",
        restart: {
            title: "Es ist etwas *besonders* Verrücktes im Gange? Stoppe die Nodes!",
            start: "Start",
            stop: "Stop"
        },
        general: {
            oh_no: "Oh nein!",
            never_should_happen: "Das hätte nicht passieren dürfen",
            try_reloading:
                'Versuche diese Seite neu zu laden oder klicke den "Dangit"-Knopf. Wenn du weiterhin Probleme hast,',
            support_link: "kontaktiere uns für Unterstützung.",
            getting_desperate: "Bist du verzweifelt? Versuche den"
        },
        load_time: {
            stuck: "Steckst du auf diesem Bildschirm fest? Versuche die Seite neu zu laden. Wann das nicht hilft, versuche den"
        },
        not_found: {
            title: "Nicht gefunden",
            wtf_paul: "Das ist vielleicht Paul's Fehler."
        },
        reset_router: {
            payments_failing:
                "Werden Zahlungen nicht durchgeführt? Versuche den Lightning-Router zu resetten.",
            reset_router: "Reset Router"
        },
        resync: {
            incorrect_balance:
                "On-chain Kontostand scheint inkorrekt? Versuche die On-chain Wallet neu zu synchen.",
            resync_wallet: "Resync Wallet"
        },
        on_boot: {
            existing_tab: {
                title: "Mehrere Tabs erkannt",
                description:
                    "Mutiny kann nur in einem Tab genutzt werden. Es sieht so aus, als ob du weitere Tabs offen hast, in denen Mutiny läuft. Bitte schliesse den Tab und lade diese Seite neu, oder schliesse diesen Tab und lade den anderen neu."
            },
            already_running: {
                title: "Vielleicht läuft Mutiny auf einem anderen Gerät",
                description:
                    "Mutiny kann nur mit einem Gerät genutzt werden. Es sieht so aus, als ob du ein anderes Gerät oder Browser für diese Wallet nutzst. Wenn du Mutiny kürzlich auf einem anderen Gerät geschlossen hast, warte bitte ein paar Minuten und versuche es nochmals.",
                retry_again_in: "Versuche es nochmals in",
                seconds: "Sekunden"
            },
            incompatible_browser: {
                title: "Nicht kompatibler Browser",
                header: "Nicht kompatibler Browser erkannt",
                description:
                    "Mutiny benötigt einen modernen Browser, der WebAssembly, LocalStorage und IndexedDB unterstützt. Einige Browser deaktivieren diese Features im privaten Modus.",
                try_different_browser:
                    'Bitte stelle sicher, dass dein Browser alle diese Features unterstützt oder versuche es mit einem anderen Browser. Vielleicht möchtest du auch ausgewählte Erweiterungen oder "Schields" deaktivieren, die diese Features blockieren.',
                browser_storage:
                    "(Wir würden gerne mehr Browser unterstützen, aber wir müssen deine Wallet-Daten im Browserspeicher sichern, sonst verlierst du dein Geld.)",
                browsers_link: "Unterstützte Browser"
            },
            loading_failed: {
                title: "Konnte nicht geladen werden",
                header: "Mutiny konnte nicht geladen werden",
                description:
                    "Etwas ist schief gelaufen, während Mutiny Wallet hochgefahren wurde.",
                repair_options:
                    "Wenn deine Wallet kaputt zu sein scheint, findest du hier ein paar Werkzeuge. Damit kannst du versuchen deine Wallet zu debuggen und zu reparieren.",
                questions:
                    "Wenn du Fragen zur Funktionsweise dieser Schaltflächen hast, wende dich bitte an uns",
                support_link: "kontaktiere uns für Unterstützung.",
                services_down:
                    "Es sieht so aus, als ob einer der Dienste von Mutiny ausgefallen ist. Bitte versuche es später noch einmal.",
                in_the_meantime:
                    "Wenn du in der Zwischenzeit auf deine On-Chain-Gelder zugreifen möchtest, kannst du Mutiny laden",
                safe_mode: "Sicherheitsmodus"
            }
        }
    },
    modals: {
        share: "Teilen",
        details: "Details",
        loading: {
            loading: "Laden: {{stage}}",
            default: "Ich fange jetzt an",
            double_checking: "etwas noch einmal überprüfen",
            downloading: "Herunterladen",
            setup: "Einrichten",
            done: "Erledigt"
        },
        onboarding: {
            welcome: "Willkommen!",
            restore_from_backup:
                "Wenn du Mutiny bereits verwendet hast, kannst du dein Backup wiederherstellen. Andernfalls kannst du dies überspringen und dich über dein neues Wallet freuen!",
            not_available: "Das machen wir noch nicht",
            secure_your_funds: "Sichere deine Einlagen"
        },
        more_info: {
            whats_with_the_fees: "Was ist mit den Gebühren?",
            self_custodial:
                "Mutiny ist ein selbst-verwahrendes Wallet. Um eine Lightning-Zahlung zu initiieren, musst du einen Lightning-Kanal öffnen. Dazu ist ein Minimalbetrag und eine Einrichtungsgebühr erforderlich.",
            future_payments:
                "Für zukünftige Zahlungen, egal ob senden oder empfangen, fallen nur noch die normalen Netzwerkgebühren und eine geringe Servicegebühr an. Es sei denn, dein Kanal hat keine eingehende Liquidität mehr.",
            liquidity: "Lerne mehr über Liquidität"
        },
        confirm_dialog: {
            are_you_sure: "Bist du sicher?",
            cancel: "Abbrechen",
            confirm: "Bestätigen"
        },
        lnurl_auth: {
            auth_request: "Authentifizierungsanfrage",
            login: "Login",
            decline: "Rückgang",
            error: "Das hat irgendwie nicht funktioniert.",
            authenticated: "Authentifiziert!"
        }
    }
};
