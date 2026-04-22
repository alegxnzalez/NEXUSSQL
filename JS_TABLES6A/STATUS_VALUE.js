// STATUS_VALUE.js

window.STATUS_VALUE = {
  "tables": {
    "STATUS_VALUE": {
      "columns": {
        "STATUS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STATUS_TYPE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "STATUS_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "STATUS_VALUE_XID": {
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
        "INITIAL_VALUE": {
          "type": "VARCHAR2(1)",
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
        "BS_EVENT_GROUP",
        "CLAIM_STATUS",
        "CONSOL_STATUS",
        "CONTACT_STATUS",
        "CONTAINER_GROUP_STATUS",
        "CRT_LOAD_PROCESS_STATUS",
        "DEVICE_STATUS",
        "DM_TRANSACTION_STATUS",
        "DOCUMENT_STATUS",
        "DRIVER_STATUS",
        "EQUIPMENT_STATUS",
        "GTM_CAMPAIGN_REQD_STATUS",
        "GTM_CAMPAIGN_STATUS",
        "GTM_CA_LINE_REQD_STATUS",
        "GTM_CA_LINE_STATUS",
        "GTM_LICENSE_STATUS",
        "GTM_REGISTRATION_STATUS",
        "GTM_TRANSACTION_LINE_STATUS",
        "GTM_TRANSACTION_STATUS",
        "GTM_TRANS_REQD_STATUS",
        "INVOICE_STATUS",
        "ITEM_QF_REQD_STATUS",
        "ITEM_REQDOC_STATUS",
        "ITEM_STATUS",
        "JOB_STATUS",
        "LOCATION_STATUS",
        "OB_LINE_STATUS",
        "OB_ORDER_BASE_STATUS",
        "OB_SHIP_UNIT_STATUS",
        "OMR_D_LINE_STATUS",
        "OMR_STATUS",
        "ORDER_MOVEMENT_STATUS",
        "ORDER_RELEASE_STATUS",
        "POWER_UNIT_STATUS",
        "P_BID_ROUND_STATUS",
        "P_BID_STATUS",
        "P_PROJECT_STATUS",
        "QUOTE_STATUS",
        "RATE_LOAD_DATA_STATUS",
        "RATE_LOAD_HISTORY_STATUS",
        "RATE_LOAD_PROCESS_STATUS",
        "RATE_LOAD_RO_D_STATUS",
        "RATE_LOAD_RR_D_STATUS",
        "RATE_LOAD_SUMMARY_STATUS",
        "ROUTE_INSTANCE_LEG_STATUS",
        "ROUTE_INSTANCE_STATUS",
        "ROUTE_TEMPLATE_STATUS",
        "SHIPMENT_REQDOC_STATUS",
        "SHIPMENT_STATUS",
        "SHIPMENT_STOP_STATUS",
        "SHIP_GROUP_STATUS",
        "SKU_STATUS",
        "S_EQUIPMENT_STATUS",
        "S_SHIP_UNIT_LINE_STATUS",
        "S_SHIP_UNIT_STATUS",
        "TENDER_COLLABORATION_STATUS",
        "VOUCHER_STATUS",
        "WORK_ASSIGNMENT_STATUS",
        "WORK_INVOICE_STATUS"
      ]
    }
  }
};
