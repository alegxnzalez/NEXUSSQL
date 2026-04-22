// BN_RULE.js

window.BN_RULE = {
  "tables": {
    "BN_RULE": {
      "description": "This is an internal table that is used to generate Business Numbers by the business generator application logic. The rules define how the business numbers are generated. Right now since only the picture string generator is implemented, only picture string definitions are used. The user need to supply the Business number type and the Context. The BN engine locates the best matching rule definition based on rule type, domain, and the current date. After the rule definition is located the context is used to generate the business number.",
      "columns": {
        "BN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "BN_RULE_GID contains the unique identifier for the Business Number (BN) generator rule."
},
        "BN_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "BN_RULE_XID contains the unique external identifier for the Business Number (BN) generator rule."
},
        "BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "BN_TYPE",
          "info": "BN_TYPE_GID contains the unique identifier for the Business Number Generator type. Examples include: AUTO_PAY_INVOICE_NUMBER BALANCE_DUE_BILL_NUMBER BILL_OF_LADING CUST_BILL_NUMBER CUST_BILL_XID INVOICE_XID LOCATION_XID_NO_CORP LOCATION_XID_WITH_CORP MANUAL_CUST_BILL_NUMBER MANUAL_ORDER_BASE_XID OB_LINE_XID OB_SHIP_UNIT_XID ORDER_BASE_XID ORDER_RELEASE_LINE_XID ORDER_RELEASE_XID SHIP_UNIT_XID VOUCHER_NUMBER VOUCHER_XID"
},
        "BN_GENERATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "BN_GENERATOR",
          "info": "BN_GENERATOR_GID contains the unique identifier for the Business Number (BN) Generator."
},
        "RULE_DEFINITION": {
          "type": "VARCHAR2(255)",
          "nullable": true
},
        "IS_DEFAULT": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
        "BN_RANGE",
        "BN_RANGE_NUMBER",
        "BN_RANGE_NUMBER_TEST",
        "BN_RULE_JOURNAL",
        "BN_SEQUENCE",
        "BN_SEQUENCE_TEST",
        "CMS_PARAM_GENERATOR"
]
    }
  }
};