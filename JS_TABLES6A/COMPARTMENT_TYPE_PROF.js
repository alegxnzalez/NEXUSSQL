// COMPARTMENT_TYPE_PROF.js

window.COMPARTMENT_TYPE_PROF = {
  "tables": {
    "COMPARTMENT_TYPE_PROF": {
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
          "info": "User defined id for the Compartment type profile "
        },
        "COMPARTMENT_TYPE_PROF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "COMPARTMENT_TYPE_PROF_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Name for the profile"
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        }
      },
      "fk_tables": [
        "COMPARTMENT_TYPE_PROF_D",
        "PACKAGED_ITEM"
      ]
    }
  }
};
