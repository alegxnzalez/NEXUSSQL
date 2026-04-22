// INVOICE_BASE_BOV.js

window.INVOICE_BASE_BOV = {
  "tables": {
    "INVOICE_BASE_BOV": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "INVOICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INVOICE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "INVOICE_SOURCE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "ENTERED_BY_GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "INVOICE_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SERVPROV_ALIAS_VALUE": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "SERVPROV_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SERVPROV_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CORRECTION_CODE_ID": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "INVOICE_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "NET_AMOUNT_DUE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "NET_DUE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "PAYMENT_METHOD_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "PAYMENT_METHOD_CODE_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "INVOICE_SERVICE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DISCOUNT_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DISCOUNT_PERCENTAGE": {
          "type": "NUMBER(5,2)",
          "nullable": true
        },
        "DISCOUNT_DAYS_DUE": {
          "type": "NUMBER(3)",
          "nullable": true
        },
        "DISCOUNT_DUE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "ORIGIN_STATION_CITY": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "ORIGIN_STATION_FSAC": {
          "type": "VARCHAR2(5)",
          "nullable": true
        },
        "ORIGIN_STATION_SPLC": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "ORIGIN_STATION_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "ORIGIN_STATION_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true
        },
        "ORIGIN_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DEST_STATION_CITY": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "DEST_STATION_FSAC": {
          "type": "VARCHAR2(5)",
          "nullable": true
        },
        "DEST_STATION_SPLC": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "DEST_STATION_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "DEST_STATION_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true
        },
        "DEST_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "LETTER_OF_CREDIT_EXP_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "LETTER_OF_CREDIT_ISSUE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "LETTER_OF_CREDIT_NUMBER": {
          "type": "VARCHAR2(40)",
          "nullable": true
        },
        "VESSEL_CODE_QUALIFIER": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "VESSEL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "VESSEL_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "VESSEL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "VES_OP_SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "VES_OP_SERVPROV_ALIAS_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "VOYAGE_NUMBER": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "PARENT_INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
        },
        "SHIPPER_LOCATION_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIPPER_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIPPER_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CONSIGNEE_LOCATION_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CONSIGNEE_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CONSIGNEE_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BILL_TO_LOCATION_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BILL_TO_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BILL_TO_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
