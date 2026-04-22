// SHIP_GROUP_RULE_INV_PARTY.js

window.SHIP_GROUP_RULE_INV_PARTY = {
  "tables": {
    "SHIP_GROUP_RULE_INV_PARTY": {
      "description": "Involved parties that relate to the rule.",
      "columns": {
        "SHIP_GROUP_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_GROUP_RULE",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, '.' And xid."
},
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, '.' And xid."
},
        "INVOLVED_PARTY_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, '.' And xid."
},
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COM_METHOD",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, '.' And xid."
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