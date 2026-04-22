// SERVPROV_POLICY.js

window.SERVPROV_POLICY = {
  "tables": {
    "SERVPROV_POLICY": {
      "description": "Maintain service provider insurance policy information.",
      "columns": {
        "SERVPROV_POLICY_SEQNO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Unique number"
},
        "TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Defines the type of policy"
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date the policy becomes effective"
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date the policy expires"
},
        "POLICY_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Policy number for the policy"
},
        "ISSUER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The issuer of the policy"
},
        "COVERAGE_AMOUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The coverage amount for the policy"
},
        "COVERAGE_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency associated with coverage amount"
},
        "COVERAGE_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The base version of the coverage amount"
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider for which this policy applies"
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
      "fk_tables": []
    }
  }
};