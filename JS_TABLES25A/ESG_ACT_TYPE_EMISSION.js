// ESG_ACT_TYPE_EMISSION.js

window.ESG_ACT_TYPE_EMISSION = {
  "tables": {
    "ESG_ACT_TYPE_EMISSION": {
      "columns": {
        "ESG_ACTIVITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ESG_ACTIVITY_TYPE",
          "info": "The globally unique ID of an emission activity type. "
        },
        "ACT_TYPE_EMISSION_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "A system-generated sequence number for the record. "
        },
        "ESG_EMISSION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ESG_EMISSION_TYPE",
          "info": "The type of emission that needs to be considered for the emission activity type. E.g., CO2, CO2e for Activity Type Transportation."
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
