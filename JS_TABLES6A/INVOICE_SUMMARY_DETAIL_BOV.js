// INVOICE_SUMMARY_DETAIL_BOV.js

window.INVOICE_SUMMARY_DETAIL_BOV = {
  "tables": {
    "INVOICE_SUMMARY_DETAIL_BOV": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "LINEITEM_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "BILLED_AS_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "BILLED_AS_QUANTITY": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FREIGHT_RATE_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": false
        },
        "FREIGHT_RATE_QUANTITY": {
          "type": "NUMBER()",
          "nullable": false
        },
        "UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "WEIGHT_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "FREIGHT_CHARGE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PREPAID_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "ACCESSORIAL_DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DECLARED_VALUE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DECLARED_VALUE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "For audit trail purposes. This field stores the id of the user who first entered the record. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "For audit trail purposes. This field stores the date and time when the record was first entered in the database. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "For audit trail purposes. This field stores the id of the user who last updated the record. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "For audit trail purposes. This field stores the date and time when the record was updated in the database."
        }
      },
      "fk_tables": []
    }
  }
};
