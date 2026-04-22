// TEXT_TEMPLATE.js

window.TEXT_TEMPLATE = {
  "tables": {
    "TEXT_TEMPLATE": {
      "columns": {
        "TEXT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The global unique identifier that represents the block of text. "
        },
        "TEXT_TEMPLATE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external identifier that represents the block of text. "
        },
        "TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "The actual text related to this template. "
        },
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "If set, the text template may only be used with documents of the given type. "
        },
        "IS_MODIFIABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If true, users should be able to override the text template on the document UI"
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
        "AGENT_TEXT",
        "DOCUMENT_DEF_TEXT",
        "DRIVER_TEXT",
        "EQUIPMENT_TEXT",
        "GTM_CAMPAIGN_REQD_TEXT",
        "GTM_CA_LINE_REQD_TEXT",
        "GTM_LICENSE_TEXT",
        "GTM_RULE_RESTRICTION",
        "GTM_TIP_AUTH_TEXT",
        "GTM_TIP_RULE_TEXT",
        "GTM_TIP_TEXT",
        "GTM_TRANS_REQD_TEXT",
        "INVOICE_TEXT",
        "ITEM_REQDOC_TEXT",
        "ITEM_TEXT",
        "JOB_TEXT",
        "OB_TEXT",
        "ORDER_RELEASE_LINE_TEXT",
        "ORDER_RELEASE_TEXT",
        "POWER_UNIT_TEXT",
        "QUOTE_TEXT",
        "REMARK_QUAL",
        "REPORT_TEXT_TEMPLATE",
        "SHIPMENT_REQDOC_TEXT",
        "SHIPMENT_TEXT",
        "SHIPPING_AGENT_CONTACT_TEXT",
        "SHIPPING_AGENT_TEXT",
        "SHIP_UNIT_TEXT",
        "SKU_TEXT",
        "TEXT_TEMPLATE_PROFILE"
      ]
    }
  }
};
