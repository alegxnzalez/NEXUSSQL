// PAYMENT_METHOD_CODE.js

window.PAYMENT_METHOD_CODE = {
  "tables": {
    "PAYMENT_METHOD_CODE": {
      "columns": {
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "PAYMENT_METHOD_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "PAYMENT_METHOD_CODE_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "PAYMENT_METHOD_CODE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "B",
            "C",
            "S"
          ],
          "info": "Distinguish if this code is Commercial or Standard, or Both."
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
        "ACCESSORIAL_COST",
        "COMMERCIAL_INVOICE",
        "CUSTOMER_ACCOUNT_NUMBER",
        "GTM_TRANSACTION_VALUE",
        "GTM_TRANS_LINE_VALUE",
        "INVOICE",
        "INVOICE_LINEITEM",
        "INVOICE_SUMMARY_DETAIL",
        "LEG",
        "LINE_APPROVE_TOLERANCE_DETAIL",
        "NFRC_RULE",
        "OB_ORDER_BASE",
        "ORDER_RELEASE",
        "ORDER_ROUTING_RULE",
        "ORDER_ROUTING_RULE_D",
        "PAYMENT_METHOD_PROFILE_D",
        "QUOTE_COST_OPTION_SHIP_COST",
        "RATE_GEO",
        "RATE_GEO_COST",
        "SECONDARY_CHARGE_RULE",
        "SHIPMENT",
        "SHIPMENT_COST",
        "SHIPPING_AGENT_CONTACT",
        "TEXT_TEMPLATE_PROFILE"
      ]
    }
  }
};
