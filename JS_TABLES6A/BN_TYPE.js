// BN_TYPE.js

window.BN_TYPE = {
  "tables": {
    "BN_TYPE": {
      "columns": {
        "BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "BN_TYPE_GID contains the unique identifier for the Business Number (BN) Generator type. Examples of types include: AUTO_PAY_INVOICE_NUMBER BALANCE_DUE_BILL_NUMBER BILL_OF_LADING CUST_BILL_NUMBER CUST_BILL_XID INVOICE_XID LOCATION_XID_NO_CORP LOCATION_XID_WITH_CORP MANUAL_CUST_BILL_NUMBER MANUAL_ORDER_BASE_XID OB_LINE_XID OB_SHIP_UNIT_XID ORDER_BASE_XID ORDER_RELEASE_LINE_XID ORDER_RELEASE_XID SHIP_UNIT_XID VOUCHER_NUMBER VOUCHER_XID "
        },
        "BN_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "BN_TYPE_XID contains the unique external identifier for the Business Number (BN) Generator type."
        },
        "BN_CONTEXT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_CONTEXT"
        },
        "TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "COLUMN_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true
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
        "BN_RANGE_NUMBER",
        "BN_RANGE_NUMBER_TEST",
        "BN_RULE",
        "CLAIM_LINE_ITEM_REFNUM_QUAL",
        "CLAIM_REFNUM_QUAL",
        "DEVICE_REFNUM_QUAL",
        "DM_TRANSACTION_REFNUM_QUAL",
        "DRIVER_REFNUM_QUAL",
        "GTM_BOND_REFNUM_QUALIFIER",
        "GTM_CAMPAIGN_REFNUM_QUAL",
        "GTM_CA_LINE_REFNUM_QUAL",
        "GTM_LICENSE_REFNUM_QUAL",
        "GTM_LIC_LINE_REFNUM_QUAL",
        "GTM_PARTY_REFNUM_QUAL",
        "GTM_REG_REFNUM_QUAL",
        "GTM_STRUCTURE_REFNUM_QUAL",
        "GTM_STR_COMPONENT_REFNUM_QUAL",
        "GTM_TA_REFNUM_QUAL",
        "GTM_TRANSLINE_REFNUM_QUAL",
        "GTM_TRANS_REFNUM_QUAL",
        "INVOICE_LINEITEM_REFNUM_QUAL",
        "INVOICE_REFNUM_QUAL",
        "INVOICE_STOP_REFNUM_QUAL",
        "ITEM_QF_REFNUM_QUAL",
        "ITEM_REFNUM_QUAL",
        "JOB_REFNUM_QUAL",
        "LOCATION_REFNUM_QUAL",
        "OB_LINE_REFNUM_QUAL",
        "OB_REFNUM_QUAL",
        "OB_SHIP_UNIT_REFNUM_QUAL",
        "OB_SU_CONTENT_REFNUM_QUAL",
        "ORDER_RELEASE_LINE_REFNUM_QUAL",
        "ORDER_RELEASE_REFNUM_QUAL",
        "PARTNER_ITEM_REFNUM_QUAL",
        "POWER_UNIT_REFNUM_QUAL",
        "QUOTE_REFNUM_QUAL",
        "RATE_GEO_REFNUM_QUAL",
        "SHIPMENT_REFNUM_QUAL",
        "SHIPMENT_STOP_REFNUM_QUAL",
        "SHIP_GROUP_REFNUM_QUAL",
        "S_SHIP_UNIT_REFNUM_QUAL",
        "S_SUL_REFNUM_QUAL",
        "VESSEL_REFNUM_QUAL"
      ]
    }
  }
};
