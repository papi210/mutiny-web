export default {
    common: {
        title: "Billetera Mutiny",
        mutiny: "Mutiny",
        nice: "Bien",
        home: "Inicio",
        e_sats: "eSATS",
        e_sat: "eSAT",
        sats: "SATS",
        sat: "SAT",
        fee: "Comisión",
        send: "Enviar",
        receive: "Recibir",
        dangit: "¡Qué pena!",
        back: "Atrás",
        coming_soon: "(muy pronto)",
        copy: "Copiar",
        copied: "Copiado",
        continue: "Continuar",
        error_unimplemented: "Sin implementar",
        why: "¿Por qué?",
        private_tags: "Etiquetas privadas",
        view_transaction: "Ver transacción",
        view_payment_details: "Ver detalles del pago",
        pending: "Pendiente",
        error_safe_mode:
            "Mutiny se está ejecutando en modo seguro. Lightning esta deshabilitado.",
        self_hosted: "Auto-hospedado"
    },
    contacts: {
        new: "nuevo",
        add_contact: "Añadir Contacto",
        new_contact: "Nuevo Contacto",
        create_contact: "Crear contacto",
        edit_contact: "Editar contacto",
        save_contact: "Guardar contacto",
        delete: "Elminar",
        confirm_delete: "¿Está seguro de querer eliminar este contacto?",
        payment_history: "Historial de pagos",
        no_payments: "Todavía no hay pagos con",
        edit: "Editar",
        pay: "Pagar",
        name: "Nombre",
        ln_address: "Dirección Lightning",
        placeholder: "Satoshi",
        lightning_address: "Dirección Lightning",
        unimplemented: "Sin implementar",
        not_available: "No hacemos eso todavía",
        error_name: "Necesitamos por lo menos un nombre",
        email_error: "Eso no parece una dirección lightning",
        npub_error: "Eso no parece un npub de nostr",
        error_ln_address_missing:
            "Los contactos nuevos necesitan una dirección lightning",
        npub: "Npub Nostr",
        link_to_nostr_sync: "Importar Contactos de Nostr"
    },
    receive: {
        receive_bitcoin: "Recibir Bitcoin",
        edit: "Editar",
        checking: "Verificando",
        choose_format: "Escoja formato",
        payment_received: "Pago Recibido",
        payment_initiated: "Pago Iniciado",
        receive_add_the_sender: "Agregue el remitente para sus registros",
        keep_mutiny_open: "Deje Mutiny abierto para completar el pago.",
        choose_payment_format: "Escoja el formato de pago",
        unified_label: "Unificado",
        unified_caption:
            "Combina una dirección de bitcoin y una factura lightning. El remitente escoge el método de pago.",
        lightning_label: "Factura Lightning",
        lightning_caption:
            "Ideal para transacciones pequeñas. Usualmente comisiones más bajas que en-cadena.",
        onchain_label: "Dirección bitcoin",
        onchain_caption:
            "En-cadena, tal como lo hizo Satoshi. Ideal para transacciones muy grandes.",
        unified_setup_fee:
            "Una comisión de instalación de lightning por {{amount}} SATS se cobrará si pagado a través de lightning.",
        lightning_setup_fee:
            "Una comisión de instalación de lightning por {{amount}} SATS se cobrará para esta recepción.",
        amount: "Monto",
        fee: "+ Comisión",
        total: "Total",
        spendable: "Gastable",
        channel_size: "Tamaño canal",
        channel_reserve: "- Reserva canal",
        error_under_min_lightning:
            "En-cadena por defecto. El monto es demasiado pequeño para su recepción en Lightning.",
        error_creating_unified:
            "En-cadena por defecto. Also salió mal al crear la dirección unificada",
        error_creating_address:
            "Also salió mal al crear la dirección en-cadena",
        amount_editable: {
            receive_too_small:
                "Una comisión de instalación de lightning puede ser deducida del monto solicitado.",
            setup_fee_lightning:
                "Se cargará una comisión de instalación de lightning si se paga por lightning.",
            more_than_21m: "Hay solo 21 millones bitcoins.",
            set_amount: "Establecer monto",
            max: "MAX",
            fix_amounts: {
                ten_k: "10k",
                one_hundred_k: "100k",
                one_million: "1m"
            },
            del: "BORR",
            balance: "Balance"
        },
        integrated_qr: {
            onchain: "En-cadena",
            lightning: "Lightning",
            unified: "Unificado",
            gift: "Regalo Lightning"
        },
        remember_choice: "Recordar my selección para la próxima vez",
        what_for: "¿Para qué es esto?"
    },
    send: {
        search: {
            placeholder: "Nombre, dirección, factura",
            paste: "Pegar",
            contacts: "Contactos",
            global_search: "Búsqueda global",
            no_results: "No hay resultados para"
        },
        sending: "Enviando...",
        confirm_send: "Confirmar Envío",
        contact_placeholder: "Aggregar el recipiente para su registro",
        start_over: "Comenzar de Nuevo",
        send_bitcoin: "Enviar Bitcoin",
        paste: "Pegar",
        scan_qr: "Escanear QR",
        payment_initiated: "Pago Iniciado",
        payment_sent: "Pago Enviado",
        destination: "Destino",
        no_payment_info: "No hay información de pago",
        progress_bar: {
            of: "de",
            sats_sent: "sats enviados"
        },
        what_for: "¿Para qué es esto?",
        zap_note: "Zapear nota",
        error_low_balance:
            "No tenemos saldo suficiente para pagar el monto indicada.",
        error_invoice_match:
            "Monto solicitado, {{amount}} SATS, no es igual al monto establecido.",
        error_channel_reserves: "No hay suficientes fondos disponibles.",
        error_address: "Dirección Lightning Inválida",
        error_channel_reserves_explained:
            "Una porción del balance de su canal es reservada para comisiones. Intente enviar un monto más pequeño o agregue fondos.",
        error_clipboard: "Portapapeles no soportado",
        error_keysend: "Keysend falló",
        error_LNURL: "Pago LNURL falló",
        error_expired: "La factura está expirada",
        payjoin_send:
            "Esto es un payjoin! El Mutiny continuará hasta que la privacidad mejore",
        payment_pending: "Pago pendiente",
        payment_pending_description:
            "Se esta tomando un tiempo, pero es posible que este pago todavía se realice. Por favor verifique 'Actividad' para el estado actual.",
        hodl_invoice_warning:
            "Esta es una factura hodl. Los pagos a facturas hodl pueden causar cierres forzosos del canal, lo que resulta en comisiones altas en-cadena ¡Pague bajo su propio riesgo!",
        private: "Privado",
        anonzap: "Zap Anon"
    },
    feedback: {
        header: "¡Denos retroalimentación!",
        received: "¡Retroalimentacion recibida!",
        thanks: "Gracias por decirnos lo que está sucediendo.",
        more: "¿Tiene algo más que decir?",
        tracking:
            "Mutiny no rastrea n espía su comportamiento, por lo que su retroalimentación es increíblemente útil.",
        github: "No responderemos a esta retroalimentación. Si desea soporte por favor",
        create_issue: "cree una issue en GitHub.",
        link: "¿Retroalimentación?",
        feedback_placeholder:
            "Bugs, solicitud de funcionalidad, retroalimentación, etc.",
        info_label: "Incluir información de contacto",
        info_caption: "Si necesita que le demos seguimiento a este problema",
        email: "Correo electrónico",
        email_caption: "Direcciones desechables son bienvenidas",
        nostr: "Nostr",
        nostr_caption: "Su npub más fresco",
        nostr_label: "npub de Nostr o NIP-05",
        send_feedback: "Enviar Retroalimentación",
        invalid_feedback: "¡Por favor diga algo!",
        need_contact: "Necesitamos alguna forma de contactarlo",
        invalid_email: "Eso no me parece una dirección de correo electrónico",
        error: "Error enviando retroalimentación {{error}}",
        try_again: "Por favor intente de nuevo más tarde."
    },
    activity: {
        title: "Actividad",
        mutiny: "Mutiny",
        wallet: "Billetera",
        nostr: "Nostr",
        view_all: "Ver todo",
        receive_some_sats_to_get_started: "Reciba algunos sats para comenzar",
        channel_open: "Canal Abierto",
        channel_close: "Canal Cerrado",
        unknown: "Desconocido",
        import_contacts:
            "Importe sus contactos desde nostr para ver a quién están zapeando.",
        coming_soon: "Muy pronto",
        private: "Privado",
        anonymous: "Anónimo",
        from: "De:",
        transaction_details: {
            lightning_receive: "Recibido via Lightning",
            lightning_send: "Enviado via Lightning",
            channel_open: "Canal abierto",
            channel_close: "Canal cerrado",
            onchain_receive: "Recibido en-cadena",
            onchain_send: "Enviado en-cadena",
            paid: "Pagado",
            unpaid: "Sin pagar",
            status: "Estado",
            date: "Fecha",
            tagged_to: "Etiquetado a",
            description: "Descripción",
            fee: "Comisión",
            onchain_fee: "Comisión En-cadena",
            invoice: "Factura",
            payment_hash: "Hash de Pago",
            payment_preimage: "Preimagen",
            txid: "Txid",
            total: "Monto Solicitado",
            balance: "Balance",
            reserve: "Reserva",
            peer: "Par",
            channel_id: "ID Canal",
            reason: "Razón",
            confirmed: "Confirmado",
            unconfirmed: "Sin Confirmar",
            sweep_delay:
                "Los fondos pueden tomar algunos días en regresar a la billetera",
            no_details:
                "No se encontraron detalles del canal, lo que significa que probablemente el canal ha sido cerrado.",
            back_home: "regresar a inicio"
        }
    },
    scanner: {
        paste: "Pegar Algo",
        cancel: "Cancelar"
    },
    settings: {
        header: "Ajustes",
        support: "Entérese como apoyar a Mutiny",
        experimental_features: "Experimentos",
        debug_tools: "HERRAMIENTAS DE DEPURACIÓN",
        danger_zone: "Zona de peligro",
        general: "General",
        version: "Versión:",
        admin: {
            title: "Página de Administración",
            caption:
                "Nuestras herramientas internas de depuración ¡Úselas sabiamente!",
            header: "Herramientas Secretas de Depuración",
            warning_one:
                "Si sabe lo que está haciendo está en el lugar adecuado.",
            warning_two:
                "Estas son herramientas internas que usamos para depurar y probar la aplicación ¡Por favor tenga cuidado!",
            kitchen_sink: {
                disconnect: "Desconectar",
                peers: "Pares",
                no_peers: "No hay pares",
                refresh_peers: "Refrescar Pares",
                connect_peer: "Conectar a Par",
                expect_a_value: "Esperando un valor...",
                connect: "Conectar",
                close_channel: "Cerrar Canal",
                force_close: "Forzar cierre de canal",
                abandon_channel: "Abandonar Canal",
                confirm_close_channel:
                    "¿Está seguro de querer cerrar este canal?",
                confirm_force_close:
                    "¿Está seguro de querer forzar el cierre de este canal? Sus fondos tardarán unos días en ser redimidos en la cadena.",
                confirm_abandon_channel:
                    "¿Está seguro de querer abandonar este canal? Típicamente haga esto solo si la transacción de apertura no se confirma nunca. De lo contrario, perderá fondos.",
                channels: "Canales",
                no_channels: "No hay Canales",
                refresh_channels: "Refrescar Canales",
                pubkey: "Pubkey",
                amount: "Monto",
                open_channel: "Abrir Canal",
                nodes: "Nodos",
                no_nodes: "No hay nodos",
                enable_zaps_to_hodl: "¿Habilitar zaps a facturas hodl?",
                zaps_to_hodl_desc:
                    "Zaps a facturas hodl pueden resultar en el cierre forzoso de canales, lo que resulta en altas comisiones en-cadena ¡Use bajo su propio riesgo!",
                zaps_to_hodl_enable: "Habilitar zaps hodl",
                zaps_to_hodl_disable: "Deshabilitar zaps hodl"
            }
        },
        backup: {
            title: "Respaldo",
            secure_funds: "Aseguremos estos fondos.",
            twelve_words_tip:
                "Le mostraremos 12 palabras. Usted escribe esas 12 palabras.",
            warning_one:
                "Si limpia el historial de su navegador, o pierde su dispositivo, estas 12 palabras son la única manera de restaurar su billetera.",
            warning_two: "Mutiny es auto-custodial. Todo depende de usted...",
            confirm: "Escribí las palabras",
            responsibility: "Entiendo que mis fondos son mi responsabilidad",
            liar: "No estoy mintiendo solo para terminar con esto",
            seed_words: {
                reveal: "TOQUE PARA REVELAR LAS PALABRAS SEMILLA",
                hide: "ESCONDER",
                copy: "Peligrosamente Copiar al Portapapeles",
                copied: "Copiado!"
            }
        },
        channels: {
            title: "Canales Lightning",
            outbound: "Saliente",
            inbound: "Entrante",
            reserve: "Reserva",
            have_channels: "Tiene",
            have_channels_one: "canal lightning.",
            have_channels_many: "canales lightning.",
            inbound_outbound_tip:
                "Saliente es el monto de dinero que puede gastar en lightning. Entrante es el monto que puede recibir sin incurrir en una comisión de servicio de lightning.",
            reserve_tip:
                "Alrededor del 1% del balance de su canal está reservado en lightning para comisiones. Reservas adicionales son requeridas para canales que abrió usando swap.",
            no_channels:
                "Parece que todavía no tiene ningún canal. Para empezar, reciba algunos sats port lightning, o haga un swap para mover fondos en-cadena hacia un canal ¡Manos a la obra!",
            close_channel: "Cerrar",
            online_channels: "Canales en Línea",
            offline_channels: "Canales Fuera de Línea",
            close_channel_confirm:
                "Cerrar este canal moverá el saldo en-cadena e incurrirá en una comisión en-cadena."
        },
        connections: {
            title: "Conexiones Billetera",
            error_name: "El nombre no puede estar vacío",
            error_connection: "Fallo al crear Conexión Billetera",
            error_budget_zero: "El presupuesto debe ser mayor a cero",
            add_connection: "Agregar Conexión",
            manage_connections: "Manejar Conexiones",
            manage_gifts: "Manejar Regalos",
            delete_connection: "Eliminar",
            new_connection: "Nueva Conexión",
            edit_connection: "Editar Conexión",
            new_connection_label: "Nombre",
            new_connection_placeholder: "Mi cliente nostr favorito...",
            create_connection: "Crear Conexión",
            save_connection: "Guardar Cambios",
            edit_budget: "Editar Presupuesto",
            open_app: "Abrir Aplicación",
            open_in_nostr_client: "Abrir en Cliente Nostr",
            open_in_primal: "Abrir en Primal",
            nostr_client_not_found: "Cliente nostr no encontrado",
            client_not_found_description:
                "Instale un cliente nostr como Primal, Amethyst, o Damus para abrir este enlace.",
            relay: "Relé",
            authorize:
                "Autoriza servicios externos para solicitar pagos desde su billetera. Combina muy bien con clientes Nostr.",
            pending_nwc: {
                title: "Solicitudes Pendientes",
                approve_all: "Aprovar Todo",
                deny_all: "Denegar Todo"
            },
            careful:
                "¡Tenga cuidado dónde comparte esta conexión! Solicitudes dentro del presupuesto serán pagadas automáticamente.",
            spent: "Gastado",
            remaining: "Restante",
            confirm_delete: "¿Está seguro de querer eliminar esta conexión?",
            budget: "Presupuesto",
            resets_every: "Se restablece cada",
            resubscribe_date: "Suscribirse de nuevo en"
        },
        emergency_kit: {
            title: "Kit de Emergencia",
            caption: "Diagnostique y resuelva problemas con su billetera.",
            emergency_tip:
                "Si su billetera parece dañada, aquí hay algunas herramientas para tratar depurarla y repararla.",
            questions:
                "Si tiene preguntas acerca de qué hacen estos botones, por favor",
            link: "contáctenos para recibir soporte.",
            import_export: {
                title: "Exportar estado de la billetera",
                error_password: "Contraseña requerida",
                error_read_file: "Error al leer archivo",
                error_no_text: "No se encontró texto en el archivo",
                tip: "Puede exportar todo el estado de su Billetera Mutiny a un archivo e importarlo a otro navegador ¡Usualmente funciona!",
                caveat_header: "Advertencias importantes:",
                caveat: "después de exportar no realice ninguna operación en el navegador original. Si lo hace, tendrá que exportar de nuevo. Después de una importación exitosa, una buena práctica es borrar el estado del navegador original solo para asegurarse de no crear conflictos.",
                save_state: "Guardar Estado a Archivo",
                import_state: "Importar Estado desde Archivo",
                confirm_replace: "¿Desea reemplazar su estado con",
                password: "Ingrese su contraseña para descifrar",
                decrypt_wallet: "Descifrar Billetera"
            },
            logs: {
                title: "Descargar logs de depuración",
                something_screwy:
                    "Algo raro está sucediendo? ¡Verifique los logs!",
                download_logs: "Descargar logs",
                password: "Ingrese su contraseña para cifrar",
                confirm_password_label: "Confirme la Contraseña"
            },
            delete_everything: {
                delete: "Eliminar Todo",
                confirm:
                    "Esto eliminará el estado de su nodo ¡Esto no puede ser deshecho!",
                deleted: "Eliminado",
                deleted_description: "Eliminados todos los datos"
            }
        },
        encrypt: {
            title: "Cambiar Contraseña",
            caption: "Haga un respaldo primero para desbloquear el cifrado",
            header: "Cifre sus palabras semilla",
            hot_wallet_warning:
                'Mutiny es una "billetera caliente" por lo que necesita sus palabras semilla para operar, pero usted puede opcionalmente cifrar esas palabras con una contraseña.',
            password_tip:
                "De esa manera, si alguien consigue acceder a su navegador, de todas maneras no tendrá acceso a sus fondos.",
            optional: "(opcional)",
            existing_password: "Constraseña existente",
            existing_password_caption:
                "Deje vacío si no ha establecido una contraseña todavía.",
            new_password_label: "Contraseña",
            new_password_placeholder: "Ingrese una contraseña",
            new_password_caption:
                "Esta contraseña será usada para cifrar sus palabras semilla. Si se le olvida, necesitará reingresar sus palabras semilla para acceder a sus fondos. Usted si escribió sus palabras semilla ¿correcto?",
            confirm_password_label: "Confirme Contraseña",
            confirm_password_placeholder: "Ingrese la misma contraseña",
            encrypt: "Cifrar",
            skip: "Saltar",
            error_match: "Las contraseñas no coinciden",
            error_same_as_existingpassword:
                "La nueva contraseña no debe coincidir con la contraseña existente"
        },
        decrypt: {
            title: "Ingrese su contraseña",
            decrypt_wallet: "Descifrar Billetera",
            forgot_password_link: "¿Olvidó la Contraseña?",
            error_wrong_password: "Contraseña Inválida"
        },
        currency: {
            title: "Moneda",
            caption: "Escoja su par de monedas preferida",
            select_currency: "Seleccione Moneda",
            select_currency_label: "Par de Moneda",
            select_currency_caption:
                "Al escoger una nueva moneda se resincronizará la billetera para obtener una actualización del precio",
            request_currency_support_link: "Solicite soporte para más monedas",
            error_unsupported_currency:
                "Por favor seleccione una moneda soportada."
        },
        language: {
            title: "Idioma",
            caption: "Escoja su idioma preferido",
            select_language: "Seleccione Idioma",
            select_language_label: "Idioma",
            select_language_caption:
                "Al escoger un nuevo idioma se cambiará el lenguaje de la billetera, ignorando el idioma actual del navegador",
            request_language_support_link: "Solicite soporte para más idiomas",
            error_unsupported_language:
                "Por favor seleccione un idioma soportado."
        },
        lnurl_auth: {
            title: "LNURL Auth",
            auth: "Auth",
            expected: "Esperando algo como LNURL..."
        },
        plus: {
            title: "Mutiny+",
            join: "Unirse",
            sats_per_month: "por {{amount}} sats por mes.",
            lightning_balance:
                "Necesitará por lo menos {{amount}} sats en su saldo lightning para empezar ¡Intente antes de comprar!",
            restore: "Restaurar Suscripción",
            ready_to_join: "Listo para unirse",
            click_confirm: "Haga clic en confirmar para pagar su primer mes.",
            open_source: "Mutiny es código abierto y auto-hospedable.",
            optional_pay: "Pero también puede pagar por él.",
            paying_for: "Pagando por",
            supports_dev:
                "ayuda a soportar el desarrollo continuo y desbloquea el acceso temprano a nuevas características y funcionalidad premium:",
            thanks: "¡Usted hace parte del motín! Disfrute de las siguientes ventajas:",
            renewal_time: "Recibirá una solicitud de renovación de pago hacia",
            cancel: "Para cancelar su suscripción simplemente no pague. También puede deshabilitar el Mutiny+",
            wallet_connection: "Conexión Billetera.",
            subscribe: "Suscribirse",
            error_no_plan: "No se encontraron planes",
            error_failure: "No se pudo suscribir",
            error_no_subscription: "No se encontró ninguna suscripción",
            error_expired_subscription:
                "Su suscripción ha expirado, haga clic en unirse para renovar",
            satisfaction: "Satisfacción engreída",
            gifting: "Regalos",
            multi_device: "Acceso multi-dispositivo",
            ios_testflight: "Acceso a iOS TestFlight",
            more: "... y más por venir",
            cta_description:
                "Disfrute acceso temprano a nuevas características y funcionalidad premium.",
            cta_but_already_plus: "¡Gracias por su apoyo!"
        },
        restore: {
            title: "Restaurar",
            all_twelve: "Necesita ingresar todas las 12 palabras",
            wrong_word: "Palabra equivocada",
            paste: "Peligrosamente Pegar del Portapapeles",
            confirm_text:
                "¿Está seguro de querer restaurar a esta billetera? ¡Su billetera existente será eliminada!",
            restore_tip:
                "Podrá restaurar una Billetera Mutiny existente desde su frase de 12 palabras semilla. Esto reemplazará su billetera existente, ¡por lo tanto esté seguro de saber lo que está haciendo!",
            multi_browser_warning:
                "No use múltiples navegadores al mismo tiempo.",
            error_clipboard: "Portapapeles no soportado",
            error_word_number: "Número equivocado de palabras",
            error_invalid_seed: "Frase semilla inválida"
        },
        servers: {
            title: "Servidores",
            caption:
                "¡No confíe en nosotros! Use sus propios servidores para respaldar Mutiny.",
            link: "Aprenda más acerca de auto-hospedaje",
            proxy_label: "Proxy de Websockets",
            proxy_caption:
                "Cómo su nodo de lightning se comunica con el resto de la red.",
            error_proxy: "Debe ser una url comenzando con wss://",
            esplora_label: "Esplora",
            esplora_caption: "Datos de bloques para información en-cadena.",
            error_esplora: "Eso no parece una URL",
            rgs_label: "RGS",
            rgs_caption:
                "Rapid Gossip Sync. Datos de red sobre la red de lightning usados para enrutamiento.",
            error_rgs: "Eso no parece una URL",
            lsp_label: "LSP",
            lsp_caption:
                "Lightning Service Provider. Automáticamente abre canales hacia usted para liquidez entrante. También envuelve facturas para privacidad.",
            lsps_connection_string_label:
                "Cadena de Caracteres de Conexión LSPS",
            lsps_connection_string_caption:
                "Lightning Service Provider. Automáticamente abre canales hacia usted para liquidez entrante. Usando la especificación LSP.",
            error_lsps_connection_string:
                "Eso no parece una cadena de caracteres de conexión",
            lsps_token_label: "Token LSPS",
            lsps_token_caption:
                "Token LSPS.  Usado para identificar qué billetera está conectando al LSP",
            lsps_valid_error:
                "Puede tener tan solo un LSP establecido o una Cadena de Caracteres de Conexión LSPS y Token LSPS establecidos, no ambos.",
            error_lsps_token: "Eso no parece un token válido",
            storage_label: "Almacenamiento",
            storage_caption: "Servicio de respaldo VSS cifrado.",
            error_lsp: "Eso no parece un URL",
            save: "Guardar"
        },
        nostr_contacts: {
            title: "Sincronizar Contactos Nostr",
            npub_label: "npub nostr",
            npub_required: "Npub no puede estar vacío",
            sync: "Sincronizar",
            resync: "Resincronizar",
            remove: "Eliminar"
        },
        manage_federations: {
            title: "Manejar Federaciones",
            federation_code_label: "Código federación",
            federation_code_required: "Código federación no puede estar vacío",
            federation_added_success: "Federación agregada exitosamente",
            federation_remove_confirm:
                "¿Esta seguro de querer eliminar esta federación? Asegúrese primero de que sus fondos sean transferidos a su balance lightning u otra billetera.",
            add: "Agregar",
            remove: "Eliminar",
            expires: "Expira",
            federation_id: "ID federación",
            description:
                "Mutiny tiene soporte experimental para el protocolo Fedimint. Necesitará un código de invitación a la federación para poder usar esta funcionalidad. Estos fondos no están actualmente respaldados remotamente ¡Almacene fondos en una federación bajo su propio riesgo!",
            learn_more: "Aprenda más sobre Fedimint."
        },
        gift: {
            give_sats_link: "Dar sats de regalo",
            title: "Regalo",
            no_plus_caption: "Actualice a Mutiny+ para habilitar regalos",
            receive_too_small:
                "Su primera recepción debe ser de {{amount}} SATS o más.",
            setup_fee_lightning:
                "Una comisión de instalación de lightning será cargada para recibir este regalo.",
            already_claimed: "Este regalo ya ha sido reclamado",
            sender_is_poor:
                "El remitente no tiene suficiente saldo para pagar este regalo.",
            sender_timed_out:
                "Se agotó el tiempo para el pago del regalo. El remitente puede estar desconectado, o este regalo ya ha sido reclamado.",
            sender_generic_error: "Remitente envió error: {{error}}",
            receive_header: "¡Le han regalado algunos sats!",
            receive_description:
                "Usted debe ser bastante especial. Para reclamar su dinero simplemente presione el botón grande. Los fondos serán agregados a esta billetera la próxima vez que el remitente se conecte.",
            receive_claimed:
                "¡Regalo reclamado! Deberá ver el regalo reflejado en el balance en breve.",
            receive_cta: "Reclamar Regalo",
            receive_try_again: "Intente de Nuevo",
            send_header: "Crear Regalo",
            send_explainer:
                "Regale sats. Cree una URL de regalo de Mutiny que pueda ser reclamado por cualquiera con un navegador.",
            send_name_required: "Esto es para sus registros",
            send_name_label: "Nombre del Recipiente",
            send_header_claimed: "¡Regalo Recibido!",
            send_claimed: "Su regalo ha sido reclamado. Gracias por compartir.",
            send_sharable_header: "URL compartible",
            send_instructions:
                "Copie este URL de regalo a su recipiente, o pídale que escanee este código QR con su billetera.",
            send_another: "Crear Otro",
            send_small_warning:
                "Un usuario nuevo de Mutiny no podrá redimir menos de 100k sats.",
            send_cta: "Crear un regalo",
            send_delete_button: "Eliminar Regalo",
            send_delete_confirm:
                "¿Está seguro de querer eliminar este regalo? ¿Es este su momento de tirar de la alfombra?",
            send_tip:
                "Su copia de la Billetera Mutiny necesita estar abierta para que el regalo sea reclamado.",
            need_plus:
                "Actualice a Mutiny+ para habilitar regalos. La funcionalidad de regalos le permite crear una URL de regalo de Mutiny que puede ser reclamado por cualquiera con un navegador."
        }
    },
    swap: {
        peer_not_found: "Par no encontrado",
        channel_too_small:
            "Es simplemente tonto crear un canal más pequeño que {{amount}} sats",
        insufficient_funds: "No tiene suficientes fondos para crear este canal",
        header: "Hacer un Swap a Lightning",
        initiated: "Swap Iniciado",
        sats_added: "+{{amount}} sats serán agregados a su balance lightning",
        use_existing: "Usar par existente",
        choose_peer: "Escoja un par",
        peer_connect_label: "Conectar a un par nuevo",
        peer_connect_placeholder: "Cadena de caracteres de conexión a par",
        connect: "Conectar",
        connecting: "Conectando...",
        confirm_swap: "Confirmar Swap"
    },
    swap_lightning: {
        insufficient_funds:
            "No tiene fondos suficientes para hacer swap a lightning",
        header: "Hacer Swap a Lightning",
        header_preview: "Previsualizar Swap",
        completed: "Swap Completado",
        too_small:
            "Monto invalido ingresado. Tiene que hacer un swap de por lo menos 100k sats.",
        sats_added:
            "+{{amount}} sats han sido agregados a su balance de Lightning",
        sats_fee: "+{{amount}} sats de comisión",
        confirm_swap: "Confirmar Swap",
        preview_swap: "Previsualizar Comisión de Swap"
    },
    reload: {
        mutiny_update: "Actualización de Mutiny",
        new_version_description:
            "Una nueva versión de Mutiny ha sido almacenada en el caché, recargue para empezar a usarla.",
        reload: "Recargar"
    },
    error: {
        title: "Error",
        emergency_link: "kit de emergencia.",
        reload: "Recargar",
        restart: {
            title: "¿Algo *extra* absurdo sucediendo? ¡Detenga los nodos!",
            start: "Iniciar",
            stop: "Parar"
        },
        general: {
            oh_no: "¡Oh no!",
            never_should_happen: "Esto nunca debió suceder",
            try_reloading:
                'Intente recargar esta página o haga clic en el botón "Qué Pena". Si continua teniendo problemas,',
            support_link: "contáctenos para recibir soporte.",
            getting_desperate: "¿Desesperado? Intente"
        },
        load_time: {
            stuck: "¿Atascado en esta pantalla? Intente recargar. Si eso no funciona, intente"
        },
        not_found: {
            title: "No Encontrado",
            wtf_paul: "Esto es probablemente culpa de Paul."
        },
        reset_router: {
            payments_failing:
                "¿No puede hacer pagos? Intente reiniciar el enrutador de lightning.",
            reset_router: "Reiniciar Enrutador"
        },
        resync: {
            incorrect_balance:
                "¿El balance en-cadena parece incorrecto? Intente resincronizar la billetera en-cadena.",
            resync_wallet: "Resincronizar billetera"
        },
        on_boot: {
            existing_tab: {
                title: "Múltiples pestañas detectadas",
                description:
                    "Mutiny solo puede ser usado en una pestaña a la vez. Parece que tiene otra pestaña abierta con Mutiny ejecutándose. Por favor cierre esa pestaña y refresque esta página, o cierre esta pestaña y refresque la otra."
            },
            already_running: {
                title: "Mutiny puede estar ejecutándose en otro dispositivo",
                description:
                    "Mutiny solo puede ser usado en un lugar a la vez. Parece que tiene otro dispositivo o navegador usando esta billetera. Si ha cerrado Mutiny recientemente en otro dispositivo, por favor espere unos minutos e intente de nuevo.",
                retry_again_in: "Intente de nuevo en",
                seconds: "segundos"
            },
            incompatible_browser: {
                title: "Navegador incompatible",
                header: "Navegador incompatible detectado",
                description:
                    "Mutiny requiere un navegador moderno que soporte WebAssembly, LocalStorage, e IndexedDB. Algunos navegadores deshabilitan estas funcionalidades en modo privado.",
                try_different_browser:
                    'Por favor asegúrese de que su navegador soporte todas estas funcionalidades, o considere intentar con otro navegador. También puede intentar deshabilitar ciertas extensiones o "escudos" que puedan bloquear estas funcionalidades.',
                browser_storage:
                    "(Nos encantaría soportar más navegadores privados, pero tenemos que guardar los datos de su billetera en el almacenamiento del navegador o de lo contrario perdería esos fondos.)",
                browsers_link: "Navegadores Soportados"
            },
            loading_failed: {
                title: "Fallo al cargar",
                header: "Fallo al cargar Mutiny",
                description: "Algo no funcionó al iniciar la Billetera Mutiny.",
                repair_options:
                    "Si su billetera parece dañada, aquí hay algunas herramientas para tratar depurarla y repararla.",
                questions:
                    "Si tiene alguna pregunta acerca de qué hacen estos botones, por favor",
                support_link: "contáctenos para recibir soporte.",
                services_down:
                    "Parece que uno de los servicios de Mutiny está abajo. Por favor intente de nuevo más tarde.",
                in_the_meantime:
                    "Mientras tanto si desea acceder a sus fondos en-cadena puede cargar Mutiny en",
                safe_mode: "Modo Seguro"
            }
        }
    },
    modals: {
        share: "Compartir",
        details: "Detalles",
        loading: {
            loading: "Cargando: {{stage}}",
            default: "Apenas empezando",
            double_checking: "Verificando de nuevo algo",
            downloading: "Descargando",
            setup: "Configuración",
            done: "Hecho"
        },
        onboarding: {
            welcome: "¡Bienvenido!",
            restore_from_backup:
                "Si ha usado Mutiny antes puede restaurar desde un respaldo ¡De lo contrario puede saltarse esto y disfrutar su nueva billetera!",
            not_available: "Todavía no hacemos eso",
            secure_your_funds: "Asegure sus fondos"
        },
        more_info: {
            whats_with_the_fees: "¿Cuál es el asunto con las comisiones?",
            self_custodial:
                "Mutiny es una billetera auto-custodial. Para iniciar un pago lightning debemos abrir un canal lightning, lo que requiere un monto mínimo y una comisión de instalación.",
            future_payments:
                "Pagos futuros, tanto envíos como recepciones, solamente incurrirán en comisiones de red y una comisión nominal de servicio a menos de que su canal se quede sin capacidad entrante.",
            liquidity: "Aprenda más sobre liquidez"
        },
        confirm_dialog: {
            are_you_sure: "¿Está seguro?",
            cancel: "Cancelar",
            confirm: "Confirmar"
        },
        lnurl_auth: {
            auth_request: "Solicitud de autenticación",
            login: "Acceder",
            decline: "Declinar",
            error: "Eso no funcionó por alguna razón.",
            authenticated: "¡Autenticado!"
        }
    }
};
