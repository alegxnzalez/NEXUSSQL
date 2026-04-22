// STATUS_FUNCTOR.js

window.STATUS_FUNCTOR = {
  "tables": {
    "STATUS_FUNCTOR": {
      "columns": {
        "OBJECT_TYPE": {
          "type": "VARCHAR2(80)",
          "nullable": false,
          "values": [
            "ORDER_MOVEMENT",
            "QUOTE",
            "ROUTE_TEMPLATE",
            "CONTACT",
            "SHIP_REQDOC",
            "S_SHIP_UNIT",
            "E_SHIPMENT",
            "SHIPMENT",
            "GTM_LICENSE",
            "ROUTE_INSTANCE",
            "DRIVER",
            "TENDER_COLLABORATION",
            "CONTAINER_GROUP",
            "CLAIM",
            "EQUIPMENT",
            "GTM_TRANSACTION_LINE",
            "GTM_TRANSACTION",
            "GTM_CAMPAIGN_LINE",
            "DOCUMENT",
            "SCHEDULE",
            "JOB",
            "CONSOL",
            "OB_SHIP_UNIT",
            "E_RELEASE",
            "S_EQUIPMENT",
            "WORK_INVOICE",
            "ITEM_QF_REQDOC",
            "OB_LINE",
            "POWER_UNIT",
            "INVOICE",
            "ROUTE_INSTANCE_LEG",
            "GTM_CA_LINE_REQDOC",
            "GTM_ITEM",
            "GTM_REGISTRATION",
            "S_SHIP_UNIT_LINE",
            "GTM_TRANS_REQDOC",
            "OMR",
            "GTM_CAMPAIGN",
            "ORDER_BASE",
            "GTM_PARTY",
            "VOUCHER",
            "DOCUMENT_PARTY",
            "DM_TRANSACTION",
            "ORDER_RELEASE",
            "SHIP_GROUP",
            "GTM_SHIPMENT_REQDOC"
          ],
          "key_value": true
        },
        "STATUS_FUNCTION": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "key_value": true
        },
        "FUNCTOR_CLASS": {
          "type": "VARCHAR2(255)",
          "nullable": false
        },
        "SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_CONDITION",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SAVED_CONDITION_ADDITIVE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identify if saved condition check and functor check are cumulative.  'Y' means cumulative, 'N' means saved condition overrides status functor. "
        },
        "SAVED_CONDITION_CAUSE_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Optional; specifies the translation ID of the error message to be returned if the saved condition causes the status functor to fail"
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
