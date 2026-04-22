// VAT_CODE.js

window.VAT_CODE = {
  "tables": {
    "VAT_CODE": {
      "columns": {
        "VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Global identifier for the Value Added Tax code (domain + '.' + xid). "
        },
        "VAT_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External identifier for the Value Added Tax code. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Description of the Value Added Tax code. "
        },
        "IS_CUMULATIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if tax for this code should be calculated on top of any freight charge+tax previously calculated. "
        },
        "IS_PROVINCIAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if this code is meant for provincial tax"
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
        "ALLOCATION_OB_LINE_D",
        "ALLOCATION_ORDER_RELEASE_D",
        "ALLOCATION_OR_LINE_D",
        "INVOICE_LINEITEM",
        "INVOICE_LINEITEM_VAT",
        "VAT_ANALYSIS",
        "VAT_CODE_ORDERED_SET_D",
        "VAT_CONFIGURATION_PERSP_D",
        "VAT_PROVINCIAL_CNFG_PERSP",
        "VAT_RATE",
        "VAT_REGISTRATION",
        "VOUCHER_INV_LINE_VAT",
        "VOUCHER_VAT_ANALYSIS"
      ]
    }
  }
};
