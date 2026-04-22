// I_TRANSMISSION_REFNUM_QUAL.js

window.I_TRANSMISSION_REFNUM_QUAL = {
  "tables": {
    "I_TRANSMISSION_REFNUM_QUAL": {
      "columns": {
        "I_TRANSMISSION_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Transmission reference number qualifier gid. "
        },
        "I_TRANSMISSION_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Transmission reference number qualifier xid. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Description of the reference qualifier. "
        },
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": false,
          "values": [
            "UPDATE_OK",
            "UPDATE_NOT_OK",
            "MANY"
          ],
          "info": "Specifies if the refnum qualifier can exist on the business object multiple times, or is restricted to occur only once and whether the value is allowed to be updated. If the value is MANY, then the object can have multiple values for the same qualifier. If the value is either UPDATE_OK or UPDATE_NOT_OK, then the rule is in effect, meaning only one value is allowed for a given qualifier. In the case of UPDATE_NOT_OK, the value may not be modified."
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
        "I_TRANSMISSION_REFNUM"
      ]
    }
  }
};
