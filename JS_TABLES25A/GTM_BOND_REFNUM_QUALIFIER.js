// GTM_BOND_REFNUM_QUALIFIER.js

window.GTM_BOND_REFNUM_QUALIFIER = {
  "tables": {
    "GTM_BOND_REFNUM_QUALIFIER": {
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
        "GTM_BOND_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "This is qualifier Gid for reference numbers. "
        },
        "GTM_BOND_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "This is qualifier Xid for reference numbers. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "This is the description for the reference number qualifier. "
        },
        "DEFAULT_REFNUM_BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_TYPE",
          "info": "This is the BN Type which can be used for generating the BNG number for reference number. "
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
        }
      },
      "fk_tables": [
        "GTM_BOND_REFNUM"
      ]
    }
  }
};
