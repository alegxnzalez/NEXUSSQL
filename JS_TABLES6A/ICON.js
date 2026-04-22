// ICON.js

window.ICON = {
  "tables": {
    "ICON": {
      "columns": {
        "ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique global identifier for the icon. "
        },
        "ICON_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External identifier for the icon. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Description of the icon. "
        },
        "PATH": {
          "type": "VARCHAR2(1024)",
          "nullable": true,
          "info": "The path of the icon file. "
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
        "IS_SPRINGBOARD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "indicate if this icon is a springboard icon"
        }
      },
      "fk_tables": [
        "CHARTER_VOYAGE",
        "CLAIM",
        "CONSOL",
        "CONTACT",
        "DOCUMENT",
        "DRIVER",
        "EQUIPMENT",
        "GTM_CAMPAIGN",
        "GTM_CAMPAIGN_LINE",
        "GTM_LICENSE",
        "GTM_LICENSE_LINE",
        "GTM_REGISTRATION",
        "GTM_STRUCTURE",
        "GTM_TRANSACTION",
        "GTM_TRANSACTION_LINE",
        "HAZMAT_ITEM",
        "INVOICE",
        "ITEM",
        "JOB",
        "LOADING_PATTERN",
        "OB_ORDER_BASE",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORIENTATION",
        "PARTNER_ITEM",
        "POWER_UNIT",
        "PROBLEM",
        "REPORT",
        "ROUTE_INSTANCE",
        "ROUTE_INSTANCE_LEG",
        "ROUTE_TEMPLATE",
        "SHIPMENT",
        "SHIP_GROUP",
        "SKU",
        "S_SHIP_UNIT_LINE",
        "USER_WS_REPORT_ACCESS",
        "WORK_ASSIGNMENT"
      ]
    }
  }
};
