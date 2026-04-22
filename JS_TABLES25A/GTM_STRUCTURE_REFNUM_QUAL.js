// GTM_STRUCTURE_REFNUM_QUAL.js

window.GTM_STRUCTURE_REFNUM_QUAL = {
  "tables": {
    "GTM_STRUCTURE_REFNUM_QUAL": {
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
        "GTM_STRUCTURE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GTM_STRUCTURE_REFNUM_QUAL_GID contains the unique identifier for the trade item structure refnum qualifer. "
        },
        "GTM_STRUCTURE_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GTM_STRUCTURE_REFNUM_QUAL_XID contains the unique external identifier for the trade item structure refnum qualifer. "
        },
        "GTM_STRUCTURE_REFNUM_QUAL_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "DESCRIPTION contains text for the description of the trade item structure refnum qualifier "
        },
        "DEFAULT_REFNUM_BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_TYPE",
          "info": "the BN type used to generate a refnum when the refnum field for a record in the corresponding refnum table is not populated. "
        },
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": true,
          "info": "Specifies if the refnum qualifier can exist on the business object multiple times, or is restricted to occur only once and whether the value is allowed to be updated. If the value is MANY, then the object can have multiple values for the same qualifier. If the value is either UPDATE_OK or UPDATE_NOT_OK, then the rule is in effect, meaning only one value is allowed for a given qualifier. In the case of UPDATE_NOT_OK, the value may not be modified."
        }
      },
      "fk_tables": [
        "GTM_STRUCTURE_REFNUM",
        "GTM_TR_ITEM_STRUCTURE_REFNUM"
      ]
    }
  }
};
