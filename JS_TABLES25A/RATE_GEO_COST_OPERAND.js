// RATE_GEO_COST_OPERAND.js

window.RATE_GEO_COST_OPERAND = {
  "tables": {
    "RATE_GEO_COST_OPERAND": {
      "columns": {
        "RATE_GEO_COST_OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "RATE_GEO_COST_OPERAND_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "RATE_GEO_COST_OPERAND_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "FUNCTION_CODE": {
          "type": "NUMBER(3)",
          "nullable": false
        },
        "RATABLE_JAVA_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": false
        },
        "DATA_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "S",
            "I",
            "N",
            "D",
            "G",
            "U",
            "C",
            "B",
            "X",
            "P",
            "Q"
          ],
          "info": "S for String types, I for Number type, N is for Numbers, D is for Dates, G is for Gids, U for Unit of measure, C is for Currency, B is for Boolean type, X is for Xids, P for profile tables, Q for Flex field Qualifiers. "
        },
        "UOM_TYPE": {
          "type": "VARCHAR2(255)",
          "nullable": true
        },
        "GID_QUERY_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "RATABLE_OPERATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATABLE_OPERATOR"
        },
        "PROFILE_TABLE_NAME": {
          "type": "VARCHAR2(40)",
          "nullable": true
        },
        "PROFILE_DETAIL_TABLE_NAME": {
          "type": "VARCHAR2(40)",
          "nullable": true
        },
        "PROFILE_GID_COLUMN_NAME": {
          "type": "VARCHAR2(40)",
          "nullable": true
        },
        "PROFILE_TARGET_COLUMN_NAME": {
          "type": "VARCHAR2(40)",
          "nullable": true
        },
        "GUI_ENABLED": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "DATA_TYPE_HIGH": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "S",
            "I",
            "N",
            "D",
            "G",
            "U",
            "C",
            "B",
            "X",
            "P",
            "Q"
          ],
          "info": "S for String types, I for Number type, N is for Numbers, D is for Dates, G is for Gids, U for Unit of measure, C is for Currency, B is for Boolean type, X is for Xids, P for profile tables, Q for Flex field Qualifiers. "
        },
        "UOM_TYPE_HIGH": {
          "type": "VARCHAR2(255)",
          "nullable": true
        },
        "GID_QUERY_CLASS_HIGH": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "DEFAULT_FIELD_WIDTH": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "This field specifies the default length used by the external rating engine generic functionality when using a fixed-width fieldset. "
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
        "PROFILE_COMPATIBILITY_COL_NAME": {
          "type": "VARCHAR2(40)",
          "nullable": true
        },
        "VALID_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TRANSLATION_KEY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "This column holds the RBI description translation key gid. "
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        },
        "IS_QUALIFIER_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Set to Y to indicate that the RBI needs a qualifier to be specified. "
        },
        "QUALIFIER_QUERY_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "The query class used for the qualifier field. "
        },
        "QUALIFIER_FIELD_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "F",
            "P"
          ],
          "info": "The type of the field. F denotes fixed list. P denotes picklist."
        }
      },
      "fk_tables": [
        "ACCESSORIAL_COST",
        "EXT_RE_FIELDSET_D",
        "RATE_GEO_COST",
        "RATE_GEO_COST_OP_OWNER",
        "ROT_RATE_OPERAND_VISIBILITY"
      ]
    }
  }
};
