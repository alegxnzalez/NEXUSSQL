// GTM_DT_CONFIG.js

window.GTM_DT_CONFIG = {
  "tables": {
    "GTM_DT_CONFIG": {
      "columns": {
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
        "GTM_DT_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "gtm_dt_config_gid contains unique identifier for data transfer configuration "
        },
        "GTM_DT_CONFIG_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "gtm_dt_config_xid contains unique external identifier for data transfer configuration "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Description for the data transfer configuration. "
        },
        "ASSOCIATION_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "TT-DE",
            "SH-TT",
            "OR-TT",
            "OB-TT",
            "PI-C",
            "CL-I",
            "SH-IL",
            "SH-I",
            "OB-OR",
            "EL-INV",
            "SH-EA"
          ],
          "info": "Identifies the objects on which the data configuration is applied. Takes the values SH-TT, OR-TT, OB-TT, TT-DE, PI-C, CL-I, SH-IL, SH-I, OB-OR, EL-INV; TT-DE represents - Transaction to Declaration, SH-TT represents -  Shipment to Transaction, OR-TT represents - Order Release to Transaction, OB-TT represents - Order Base to Transaction, PI-C represents - Partner Item to Campaign, CL-I represents - Campaign Line - Item, SH-IL represents - Shipment to Invoice LineItem, SH-I represents - Shipment to Invoice, OB-OR represents - Order Base to Order Release, EL-INV represents Entry Line to Trade Incentive Program Inventory, SH-EA represents Shipment to Emission Activity."
        }
      },
      "fk_tables": [
        "ESG_ACTIVITY_RULE",
        "GTM_DT_CONFIG_ATTRIBUTE",
        "GTM_DT_CONFIG_RULE",
        "GTM_TRADE_INCENTIVE_PROGRAM",
        "GTM_TRANSACTION_REFERENCE",
        "INVOICE_SPLIT_RULE"
      ]
    }
  }
};
