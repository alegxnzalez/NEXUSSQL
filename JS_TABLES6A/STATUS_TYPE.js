// STATUS_TYPE.js

window.STATUS_TYPE = {
  "tables": {
    "STATUS_TYPE": {
      "columns": {
        "STATUS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "STATUS_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
        },
        "OBJECT_TYPE": {
          "type": "VARCHAR2(80)",
          "nullable": false,
          "values": [
            "ORDER_MOVEMENT",
            "GTM_TRANS_REQDOC",
            "OB_LINE",
            "GTM_TRANSACTION_LINE",
            "SCHEDULE",
            "RATE_LOAD_PROCESS",
            "OB_SHIP_UNIT",
            "RATE_LOAD_HISTORY",
            "GTM_SHIPMENT_LINE",
            "DM_TRANSACTION",
            "RATE_LOAD_DATA",
            "POWER_UNIT",
            "CRT_LOAD_PROCESS",
            "WORK_ASSIGNMENT",
            "GTM_PARTY",
            "QUOTE",
            "CONSOL",
            "RATE_LOAD_RR_D",
            "DOCUMENT",
            "GTM_REGISTRATION",
            "WORK_INVOICE",
            "S_SHIP_UNIT_LINE",
            "GTM_TRANSACTION",
            "ROUTE_INSTANCE_LEG",
            "BID",
            "GTM_ITEM",
            "GTM_SHIPMENT",
            "RATE_LOAD_RO_D",
            "ITEM",
            "PROJECT",
            "BID_ROUND",
            "JOB",
            "EQUIPMENT",
            "S_EQUIPMENT",
            "DRIVER",
            "ORDER_RELEASE",
            "CLAIM",
            "SHIP_REQDOC",
            "E_RELEASE",
            "ROUTE_TEMPLATE",
            "INVOICE",
            "ROUTE_INSTANCE",
            "SHIPMENT",
            "OMR",
            "E_SHIPMENT",
            "CONTAINER_GROUP",
            "SKU",
            "VOUCHER",
            "RATE_LOAD_SUMMARY",
            "CONTACT",
            "ORDER_BASE",
            "LOCATION",
            "S_SHIP_UNIT",
            "TENDER_COLLABORATION",
            "GTM_SHIPMENT_REQDOC",
            "SHIP_GROUP",
            "GTM_LICENSE",
            "SHIPMENT_STOP",
            "GTM_CAMPAIGN",
            "GTM_CAMPAIGN_LINE"
          ]
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true
        },
        "SEQUENCE": {
          "type": "NUMBER(2)",
          "nullable": false
        },
        "IS_EXTERNAL": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "DRIVER_STATUS",
        "POWER_UNIT_STATUS",
        "STATUS_VALUE",
        "VOUCHER_STATUS",
        "WORK_INVOICE_STATUS"
      ]
    }
  }
};
