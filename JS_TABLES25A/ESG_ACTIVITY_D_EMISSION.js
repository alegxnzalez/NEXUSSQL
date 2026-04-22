// ESG_ACTIVITY_D_EMISSION.js

window.ESG_ACTIVITY_D_EMISSION = {
  "tables": {
    "ESG_ACTIVITY_D_EMISSION": {
      "columns": {
        "ESG_ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ESG_ACTIVITY_DETAIL",
          "info": "The globally unique ID of an ESG activity. "
        },
        "ACTIVITY_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ESG_ACTIVITY_DETAIL",
          "info": "ESG Activity Sequence number. "
        },
        "ESG_EMISSION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ESG_EMISSION_TYPE",
          "info": "The type of emission for the activity detail. "
        },
        "EMISSION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The amount of emission emitted for the activity detail. "
        },
        "EMISSION_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Emission in the base unit of measure. "
        },
        "EMISSION_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Unit of measure for emission."
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
