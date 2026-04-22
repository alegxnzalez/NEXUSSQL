// COMPARTMENT_TYPE_PROF_D.js

window.COMPARTMENT_TYPE_PROF_D = {
  "tables": {
    "COMPARTMENT_TYPE_PROF_D": {
      "columns": {
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
        "COMPARTMENT_TYPE_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COMPARTMENT_TYPE_PROF",
          "info": "Id of the profile these compartment types belong to "
        },
        "COMPARTMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COMPARTMENT_TYPE",
          "info": "Id of a compartment type that belongs to this profile"
        }
      },
      "fk_tables": []
    }
  }
};
