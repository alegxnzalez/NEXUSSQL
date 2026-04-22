// AUTO_ASSIGN_CRITERIA.js

window.AUTO_ASSIGN_CRITERIA = {
  "tables": {
    "AUTO_ASSIGN_CRITERIA": {
      "columns": {
        "AUTO_ASSIGN_CRITERIA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Id for the criteria that GC3 can look at to decide on auto assignments "
        },
        "AUTO_ASSIGN_CRITERIA_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CRITERIA_TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TRANSLATION",
          "info": "Translation id for the auto assign criteria "
        },
        "CRITERIA_XPATH_FILTER": {
          "type": "VARCHAR2(500)",
          "nullable": true
        },
        "DATA_TYPE1": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Data type of the field to show when the user creates a list of items for the component; may be S/B/I/N/D/G/U/C/P/H/L/F for String, Boolean, Integer, Number, Double, Gid, UOM, Char, Percentage, Geo Hierarchy, Drop-down list, Fixed Values.  If null, no field should be shown. "
        },
        "GID_QUERY_CLASS1": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Query class to use if DATA_TYPE is a finder "
        },
        "VALID_VALUE_TYPE1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "If DATA_TYPE is F, indicates the key for the set of fixed values to be displayed in a picklist "
        },
        "UOM_TYPE1": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Uom type to use if DATA_TYPE is a uom such as DISTANCE, CURRENCY, WEIGHT etc. "
        },
        "DATA_TYPE2": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Same as DATA_TYPE1, but may be used if there is a second field for a single piece of criteria "
        },
        "GID_QUERY_CLASS2": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Same as GID_QUERY_CLASS1, but may be used if there is a second field for a single piece of criteria "
        },
        "VALID_VALUE_TYPE2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "Indicates the key for the set of fixed values to be displayed in a picklist "
        },
        "UOM_TYPE2": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Same as UOM_TYPE1, but may be used if there is a second field for a single piece of criteria "
        },
        "DATA_FIELD1": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Field in the implied business object to get the data for the component "
        },
        "DATA_FIELD2": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Same as DATA_FIELD1 but may be used if there is a second field for a single piece of criteria "
        },
        "JAVA_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Java class to get the data for the component if it is not directly accessible by a field name in the implied business object "
        },
        "RESULT_HANDLER_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Java class to handle checking the data from the business object against the list defined in the rule"
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
        "AUTO_ASSIGN_TYPE_CRIT_MAP"
      ]
    }
  }
};
