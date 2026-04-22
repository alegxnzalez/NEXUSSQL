// DOCUMENT_DEF.js

window.DOCUMENT_DEF = {
  "tables": {
    "DOCUMENT_DEF": {
      "columns": {
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "DOCUMENT_DEF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true
        },
        "REPORT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REPORT"
        },
        "OWNER_DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE"
        },
        "APP_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_ACTION"
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
        },
        "IS_ATTACHMENT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y, if the document type is an attachment. Otherwise, it is a report preparation. "
        },
        "FIXED_ACCOUNT": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "A fixed ECM account to assign all document instances. See CONTENT_MANAGEMENT_SYSTEM.ACCOUNT_TYPE for more information. "
        },
        "CONTENT_MANAGEMENT_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTENT_MANAGEMENT_SYSTEM",
          "info": "Content management system for document storage "
        },
        "DOCUMENT_CMS_TYPE": {
          "type": "VARCHAR2(300)",
          "nullable": true,
          "info": "Custom document type for the CMS. "
        },
        "DOCUMENT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "represents a template document"
        },
        "IS_CONSOLIDATED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "AGENT_TEXT",
        "DOCUMENT",
        "DOCUMENT_DEF_CHECK",
        "DOCUMENT_DEF_CMS_PARAM",
        "DOCUMENT_DEF_OWNER_DETAILS",
        "DOCUMENT_DEF_PROFILE_D",
        "DOCUMENT_DEF_TEMPLATE_MAP",
        "DOCUMENT_DEF_TEXT",
        "DRIVER_TEXT",
        "EQUIPMENT_TEXT",
        "GTM_CAMPAIGN_REQDOC",
        "GTM_CA_LINE_REQDOC",
        "GTM_CRULE_DOCUMENT_REVIEWER",
        "GTM_CRULE_DOCUMENT_SUBSCRIBER",
        "GTM_LICENSE_TEXT",
        "GTM_REGIME_DOCUMENT_DEF",
        "GTM_RULE_RESTRICTION",
        "GTM_TRANSACTION_REQDOC",
        "INVOICE_TEXT",
        "IPP_PRINTER_DOC",
        "ITEM_QF_REQDOC",
        "ITEM_REQDOC",
        "ITEM_REQDOC_DOC",
        "ITEM_REQDOC_DOC_REVIEW",
        "ITEM_REQDOC_REVIEWER",
        "ITEM_REQDOC_STATUS",
        "ITEM_REQDOC_SUBSCRIBER",
        "ITEM_REQDOC_TEXT",
        "ITEM_TEXT",
        "JOB_TEXT",
        "NOTIFY_SUBJECT_STYLESHEET",
        "OB_TEXT",
        "ORDER_RELEASE_LINE_TEXT",
        "ORDER_RELEASE_TEXT",
        "POWER_UNIT_TEXT",
        "QUOTE_TEXT",
        "SHIPMENT_REQDOC",
        "SHIPMENT_TEXT",
        "SHIPPING_AGENT_CONTACT_TEXT",
        "SHIPPING_AGENT_TEXT",
        "SHIP_UNIT_TEXT",
        "SKU_TEXT"
      ]
    }
  }
};
