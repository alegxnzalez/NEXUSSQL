// SHIP_GROUP_GEO_DEF.js

window.SHIP_GROUP_GEO_DEF = {
  "tables": {
    "SHIP_GROUP_GEO_DEF": {
      "columns": {
        "SHIP_GROUP_GEO_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "SHIP_GROUP_GEO_DEF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "System generated unique identifier for the record (without the domain) "
        },
        "SHIP_GROUP_GEO_DEF_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "info": "Description for this entity"
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
        "SHIP_GROUP_RULE"
      ]
    }
  }
};
