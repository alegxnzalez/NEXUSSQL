// INVOICE_LINEITEM_BOV.js

window.INVOICE_LINEITEM_BOV = {
  "tables": {
    "INVOICE_LINEITEM_BOV": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "LINEITEM_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "FLEX_COMMODITY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "FLEX_COMMODITY_QUAL_XID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "FLEX_COMMODITY_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "WEIGHT_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "MARKS": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "MARKS_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true
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
          "nullable": true
        },
        "FREIGHT_RATE_VALUE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FREIGHT_RATE_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "FREIGHT_RATE_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FREIGHT_CHARGE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FREIGHT_CHARGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "FREIGHT_CHARGE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PREPAID_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PREPAID_AMOUNT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "PREPAID_AMOUNT_BASE": {
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
        "COMPARTMENT_ID_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "EXPORT_LIC_CONTROL_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "EXPORT_LIC_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "EXPORT_LIC_EXP_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "EXPORT_LIC_NUMBER": {
          "type": "VARCHAR2(12)",
          "nullable": true
        },
        "IMPORT_LIC_EXP_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "IMPORT_LIC_ISSUE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "IMPORT_LIC_NUMBER": {
          "type": "VARCHAR2(12)",
          "nullable": true
        },
        "TARIFF_AGENCY_CODE": {
          "type": "VARCHAR2(4)",
          "nullable": true
        },
        "TARIFF_REFNUM": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "TARIFF_REFNUM_QUALIFIER": {
          "type": "VARCHAR2(3)",
          "nullable": true
        },
        "TARIFF_REFNUM_SUFFIX": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "TARIFF_SECTION": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "TARIFF_ITEM_NUMBER": {
          "type": "VARCHAR2(16)",
          "nullable": true
        },
        "TARIFF_ITEM_NUMBER_SUFFIX": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "TARIFF_ITEM_PART": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "TARIFF_SUPPLEMENT_ID": {
          "type": "VARCHAR2(4)",
          "nullable": true
        },
        "TARIFF_REG_AGENCY_CODE": {
          "type": "VARCHAR2(5)",
          "nullable": true
        },
        "TARIFF_PUB_AUTHORITY": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "TARIFF_ISSUING_CARRIER_ID": {
          "type": "VARCHAR2(10)",
          "nullable": true
        },
        "TARIFF_FREIGHT_CLASS_CODE": {
          "type": "VARCHAR2(5)",
          "nullable": true
        },
        "TARIFF_EFFECTIVE_DATE": {
          "type": "DATE",
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
        "DECLARED_VALUE_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DECLARED_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
        }
      },
      "fk_tables": []
    }
  }
};
