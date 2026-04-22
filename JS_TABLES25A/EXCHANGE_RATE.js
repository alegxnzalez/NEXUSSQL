// EXCHANGE_RATE.js

window.EXCHANGE_RATE = {
  "tables": {
    "EXCHANGE_RATE": {
      "columns": {
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the exchange rate. "
        },
        "EXCHANGE_RATE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the exchange rate. "
        },
        "MAXIMUM_PRECISION": {
          "type": "NUMBER(2)",
          "nullable": true,
          "info": "Limits the amount of digits for the whole and fractional part when using the exchange rate. The total number of digits is split variably between the whole and the fractional part of the exchange rate. If you leave the field empty, the precision is assumed to be 38 digits. "
        },
        "FRACTIONAL_DIGITS": {
          "type": "NUMBER(2)",
          "nullable": true,
          "info": "Limits the amount of digits for the fractional part when using the exchange rate. The European Union, for example, standardizes all currency calculations to six significant figures. "
        },
        "IS_OVERRIDE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N flag to indicate searching the default exchange rate record for all rates not specifically outlined in this exchange rate data. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "A description of the exchange rate."
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
        "ALLOCATION",
        "ALLOCATION_BASE",
        "ALLOCATION_D",
        "ALLOCATION_OB_LINE",
        "ALLOCATION_OB_LINE_D",
        "ALLOCATION_ORDER_RELEASE_D",
        "ALLOCATION_OR_LINE_D",
        "COMMERCIAL_INVOICE",
        "COMMERCIAL_INVOICE_CHARGE",
        "EXCHANGE_RATE_BY_DATE",
        "GTM_CA_LINE_VALUE",
        "GTM_LICENSE_LINE_USAGE",
        "GTM_REGIME",
        "GTM_STRUCTURE_VALUE",
        "GTM_STR_COMPONENT_CURRENCY",
        "GTM_TIP_INVENTORY_VALUE",
        "GTM_TIP_INV_MOVEMENT_VALUE",
        "GTM_TRANSACTION",
        "GTM_TRANS_LINE_LICENSE",
        "GTM_TRANS_LINE_QF_VALUE",
        "INVOICE",
        "INVOICE_LINEITEM",
        "INVOICE_LINEITEM_VAT",
        "INVOICE_LI_COMMERCIAL_DATA",
        "INVOICE_SUMMARY",
        "INVOICE_SUMMARY_DETAIL",
        "ITEM_ORIGIN_VALUE",
        "ITEM_QF_VALUE",
        "ITEM_VALUE",
        "JOB",
        "ORDER_RELEASE_ACCRUAL",
        "RATE_OFFERING",
        "SHIPMENT",
        "SHIPMENT_COST",
        "VAT_ANALYSIS",
        "VOUCHER",
        "VOUCHER_INVOICE_LINEITEM_JOIN",
        "VOUCHER_INV_LINE_VAT",
        "VOUCHER_VAT_ANALYSIS"
      ]
    }
  }
};
