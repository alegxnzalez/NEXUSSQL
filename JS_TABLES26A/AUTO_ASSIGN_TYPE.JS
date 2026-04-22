// AUTO_ASSIGN_TYPE.js

window.AUTO_ASSIGN_TYPE = {
  "tables": {
    "AUTO_ASSIGN_TYPE": {
      "description": "Content provided by GC3...lists the valid types of auto-assignments that can take place such as shipment involved parties, shipment text templates, etc.",
      "columns": {
        "AUTO_ASSIGN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Type of auto-assignment"
},
        "AUTO_ASSIGN_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "TYPE_XPATH_FILTER": {
          "type": "VARCHAR2(500)",
          "nullable": true
},
        "RULE_DEF_XPATH": {
          "type": "VARCHAR2(200)",
          "nullable": true
},
        "VALUE_PK_FIELD": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "VALUE_FIELD1": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "VALUE_FIELD2": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "VALUE_FIELD3": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "USE_PERSIST_HANDLERS_FOR_MOD": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "VALUE1_DATA_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Data type for field; S/B/I/N/D/G/U/C/P/H/L/F  for String, Boolean, Integer, Number, Double, Gid, Uom, Char, Percentage, Geo hierarchy, drop-down list, Fixed values. If null, no field should be shown"
},
        "VALUE1_GID_QUERY_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Gid query class if DATA_TYPE1 is a gid or drop-down list."
},
        "VALUE1_VALID_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "If DATA_TYPE is F, indicates the set of fixed values to display in a picklist."
},
        "VALUE1_TRANSLATION_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translation gid for field label"
},
        "VALUE2_DATA_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Same as VALUE1_DATA_TYPE, used if there is a second field for the auto assign type; example: inv parties require 3 fields."
},
        "VALUE2_GID_QUERY_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Same as VALUE1_GID_QUERY_CLASS, used if there is a second field for the auto assign type; example: inv parties require 3 fields."
},
        "VALUE2_VALID_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "Indicates the set of fixed values to display in a picklist."
},
        "VALUE2_TRANSLATION_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Same as VALUE1_TRANSLATION_GID used if there is a second field for the auto assign type; example: inv parties require 3 fields."
},
        "VALUE3_DATA_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Same as VALUE1_DATA_TYPE, used if there is a second field for the auto assign type; example: inv parties require 3 fields."
},
        "VALUE3_GID_QUERY_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Same as VALUE1_GID_QUERY_CLASS, used if there is a second field for the auto assign type; example: inv parties require 3 fields."
},
        "VALUE3_VALID_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "Indicates the set of fixed values to display in a picklist."
},
        "VALUE3_TRANSLATION_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Same as VALUE1_TRANSLATION_GID, used if there is a second field for the auto assign type; example: inv parties require 3 fields."
},
        "ASSIGNER_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Java class handles the actual auto-assignment"
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
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "AUTO_ASSIGN_RULE",
        "AUTO_ASSIGN_TYPE_CRIT_MAP",
        "AUTO_ASSIGN_TYPE_DQ_MAP"
]
    }
  }
};