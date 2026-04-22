// EQUIPMENT_REFNUM_QUAL.js

window.EQUIPMENT_REFNUM_QUAL = {
  "tables": {
    "EQUIPMENT_REFNUM_QUAL": {
      "columns": {
        "EQUIPMENT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique Equipment Reference Number Qualifier. "
        },
        "EQUIPMENT_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The Equipment Reference Number Qualifier. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The Description of the Equipment Reference Number Qualifier."
        },
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": false,
          "values": [
            "UPDATE_OK",
            "UPDATE_NOT_OK",
            "MANY"
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
        }
      },
      "fk_tables": [
        "DM_TRANSACTION",
        "EQUIPMENT_REFNUM",
        "IE_SS_S_EQUIPMENT"
      ]
    }
  }
};
