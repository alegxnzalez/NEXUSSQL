// SHIP_GROUP_SC_DEF.js

window.SHIP_GROUP_SC_DEF = {
  "tables": {
    "SHIP_GROUP_SC_DEF": {
      "columns": {
        "SHIP_GROUP_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_GROUP_RULE",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "SECONDARY_CHARGE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SECONDARY_CHARGE_RULE",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid."
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
