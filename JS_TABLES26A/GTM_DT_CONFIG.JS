// GTM_DT_CONFIG.js

window.GTM_DT_CONFIG = {
  "tables": {
    "GTM_DT_CONFIG": {
      "description": "This table holds the values for unique configuration id for data transfer configuration.",
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
          "info": "gtm_dt_config_gid contains unique identifier for data transfer configuration"
},
        "GTM_DT_CONFIG_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "gtm_dt_config_xid contains unique external identifier for data transfer configuration"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Description for the data transfer configuration."
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
                    "SH-EA",
                    "INV-EXL",
                    "BL-NL"
          ],
          "info": "Identifies the objects on which the data configuration is applied. Uses the following values: BL-NL, CL-I, EL-INV, INV-EXL, OB-OR, OB-TT, OR-TT, PI-C, SH- EA, SH-I, SH-IL, SH-TT, and TT-DE. These values represent the following: BL-NL: Base Line to New Line, CL-I: Campaign Line to Item, EL-INV: Entry Line to Trade Incentive Program Inventory, INV-EXL: Trade Incentive Program Inventory to Exit Line, OB-OR: Order Base to Order Release, OB-TT: Order Base to Transaction, OR-TT: Order Release to Transaction, PI-C: Partner Item to Campaign, SH-EA: Shipment to Emission Activity, SH-I: Shipment to Invoice, SH-IL: Shipment to Invoice Line Item, SH-TT: Shipment to Transaction, and TT-DE: Transaction to Declaration."
}
      },
      "fk_tables": [
        "ESG_ACTIVITY_RULE",
        "GTM_DT_CONFIG_ATTRIBUTE",
        "GTM_DT_CONFIG_RULE",
        "GTM_TIP_OPERATION",
        "GTM_TRADE_INCENTIVE_PROGRAM",
        "GTM_TRANSACTION_REFERENCE",
        "INVOICE_SPLIT_RULE"
]
    }
  }
};