// GTM_TIP_REFNUM_QUAL.js

window.GTM_TIP_REFNUM_QUAL = {
  "tables": {
    "GTM_TIP_REFNUM_QUAL": {
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
        "GTM_TIP_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Trade Incentive Program Reference Qualifier GID "
        },
        "GTM_TIP_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Trade Incentive Program Reference Qualifier XID "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description "
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "OTM Release "
        },
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": false,
          "values": [
            "UPDATE_OK",
            "UPDATE_NOT_OK",
            "MANY"
          ],
          "info": "Specifies if the reference number qualifier can exist on the business object multiple times, or is restricted to occur only once and whether the value is allowed to be updated. If the value is MANY, then the object can have multiple values for the same qualifier. If the value is either UPDATE_OK or UPDATE_NOT_OK, then the rule is in effect, meaning only one value is allowed for a given qualifier. In the case of UPDATE_NOT_OK, the value may not be modified."
        }
      },
      "fk_tables": [
        "GTM_ENTRY_EXIT_PROF_REFNUM",
        "GTM_TIP_AUTH_REFNUM",
        "GTM_TIP_INVENTORY_REFNUM",
        "GTM_TIP_INV_MVMT_REFNUM",
        "GTM_TIP_REFNUM",
        "GTM_TIP_RULE_REFNUM"
      ]
    }
  }
};
