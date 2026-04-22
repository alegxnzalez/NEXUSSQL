// GTM_RULE_RESTRICTION.js

window.GTM_RULE_RESTRICTION = {
  "tables": {
    "GTM_RULE_RESTRICTION": {
      "columns": {
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_COMPLIANCE_RULE"
        },
        "RULE_RESTRICTION_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "GTM_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "Determines if this restriction is related to a license, embargo, or document "
        },
        "CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "This will be a reference to a license_type_gid, embargo_regulation_gid, or document_gid "
        },
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DOCUMENT_DEF"
        },
        "GTM_REGIME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGIME"
        },
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL"
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
        "TEXT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TEXT_TEMPLATE"
        },
        "GTM_BASE_AMOUNT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_BASE_AMOUNT_TYPE"
        },
        "GTM_VALUE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_VALUE_SET",
          "info": "Value Set ID assigns the value qualifiers from it to a transaction/transactionline for VALUE SET category "
        },
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "Value Qualifier ID to get the associated formula for VALUE FORMULA category "
        },
        "GTM_FORMULA_EXPRESSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_FORMULA_EXPRESSION",
          "info": "Formula Expression ID to be associated to a particular value qualifier for VALUE FORMULA category "
        },
        "VALUE_FORMULA_RANK": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Value Formula rank helps to decide the priority in case multiple formulae are associated to a particular value qualifier "
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version."
        }
      },
      "fk_tables": []
    }
  }
};
