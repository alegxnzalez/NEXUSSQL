// BN_GENERATOR.js

window.BN_GENERATOR = {
  "tables": {
    "BN_GENERATOR": {
      "columns": {
        "BN_GENERATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "BN_GENERATOR_GID contains the unique identifier for the Business Number (BN) Generator . "
        },
        "BN_GENERATOR_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "BN_GENERATOR_XID contains the unique external identifier for the Business Number (BN) Generator. "
        },
        "GENERATOR_CLASS": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "info": "GENERATOR_CLASS contains the Java class used for the Business Number Generator."
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
        "BN_RULE"
      ]
    }
  }
};
