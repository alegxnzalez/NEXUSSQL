// COM_METHOD.js

window.COM_METHOD = {
  "tables": {
    "COM_METHOD": {
      "columns": {
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "COM_METHOD_GID contains the unique identifier for the communication method for the location. "
        },
        "COM_METHOD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "COM_METHOD_XID contains the unique external identifier for the communication method for the location. "
        },
        "FOR_INV_PARTY": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "MAX_RETRIES_ON_ERROR": {
          "type": "NUMBER(2)",
          "nullable": false,
          "info": "Maximum number of retries upon delivery failure. "
        },
        "ALTERNATE_COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "Alternate communication method to delivery message when retries are exhausted."
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        }
      },
      "fk_tables": [
        "ADHOC_NOTIFY",
        "BN_NAMED_RANGE_INV_PARTY",
        "CHARTER_VOYAGE_INVOLVED_PARTY",
        "CLAIM_INVOLVED_PARTY",
        "COM_METHOD",
        "CONSOL_INVOLVED_PARTY",
        "CONTACT_COM_METHOD",
        "CONTACT_POINT",
        "CONTENT_SOURCE",
        "CORPORATION_INVOLVED_PARTY",
        "DEVICE",
        "DIAG_PERFORMANCE_SCHEDULE",
        "DM_TRANSACTION_INVOLVED_PARTY",
        "DRIVER_INV_PARTY",
        "GTM_CAMPAIGN_INVOLVED_PARTY",
        "GTM_CA_LINE_INV_PARTY",
        "GTM_CONTENT_SOURCE_CONFIG",
        "GTM_LICENSE_INVOLVED_PARTY",
        "GTM_REG_INVOLVED_PARTY",
        "GTM_STRUCTURE_INVOLVED_PARTY",
        "GTM_TRANSACTION_INVOLVED_PARTY",
        "GTM_TRANS_LINE_INV_PARTY",
        "IE_SS_MATCH_OBJ_INV_PARTY",
        "INVOICE_INVOLVED_PARTY",
        "INVOICE_TR_EVENT_CONTACT",
        "I_TRANSMISSION",
        "JOB_INVOLVED_PARTY",
        "JOB_TR_EVENT_CONTACT",
        "LEG_INVOLVED_PARTY",
        "NFRC_RULE_INV_PARTY",
        "NFRC_RULE_JOB_INV_PARTY",
        "NOTIFY_REQUEST",
        "NOTIFY_SUBJECT_CONTACT",
        "NOTIFY_SUBJECT_DRIVER",
        "NOTIFY_SUBJECT_INVPARTY",
        "NOTIFY_SUBJECT_SERVPROV",
        "NOTIFY_SUBJECT_STYLESHEET",
        "OBJECT_DOCUMENT_SET_SUBSC",
        "OB_INVOLVED_PARTY",
        "OB_LINE_INVOLVED_PARTY",
        "OB_SU_CONTENT_INV_PARTY",
        "OB_SU_INVOLVED_PARTY",
        "OB_TR_EVENT_CONTACT",
        "ORDER_MOVEMENT_INV_PARTY",
        "ORDER_RELEASE_INV_PARTY",
        "ORDER_RELEASE_LINE_INV_PARTY",
        "ORDER_RELEASE_TR_EVENT_CONTACT",
        "PERFM_THRESH_NOTIFY_CONTACT",
        "QUOTE_INVOLVED_PARTY",
        "QUOTE_TR_EVENT_CONTACT",
        "Q_INTEGRATION_OUT",
        "RATE_LOAD_DEFINITION_INV_PARTY",
        "RATE_OFFERING_INV_PARTY",
        "REPETITION_SCHEDULE_INV_PARTY",
        "ROUTE_INSTANCE_INV_PARTY",
        "ROUTE_INSTANCE_LEG_INV_PARTY",
        "ROUTE_TEMPLATE_INV_PARTY",
        "ROUTE_TEMPLATE_LEG_INV_PARTY",
        "SC_INVOLVED_PARTY",
        "SG_STATUS_HISTORY",
        "SHIPMENT_INVOLVED_PARTY",
        "SHIPMENT_STOP_INV_PARTY",
        "SHIPMENT_STOP_SU_INV_PARTY",
        "SHIPMENT_TR_EVENT_CONTACT",
        "SHIPPING_AGENT_CONTACT",
        "SHIP_GROUP_INVOLVED_PARTY",
        "SHIP_GROUP_RULE_INV_PARTY",
        "SHIP_GROUP_TR_EVENT_CONTACT",
        "SKU_INVOLVED_PARTY",
        "SS_STATUS_HISTORY",
        "TENDER_COLLAB_SERVPROV",
        "TRANSACTIONAL_EVENT_CONTACT",
        "TRANSACTIONAL_EVENT_INVPARTY",
        "TRANSACTIONAL_EVENT_SERVPROV",
        "TRANSPORT_NETWORK_INV_PARTY"
      ]
    }
  }
};
