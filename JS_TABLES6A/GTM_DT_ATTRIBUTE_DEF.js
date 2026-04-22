// GTM_DT_ATTRIBUTE_DEF.js

window.GTM_DT_ATTRIBUTE_DEF = {
  "tables": {
    "GTM_DT_ATTRIBUTE_DEF": {
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
        "GTM_DT_ATTRIBUTE_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "gtm_dt_attribute_def_gid contains unique identifier for data transfer attribute "
        },
        "GTM_DT_ATTRIBUTE_DEF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "gtm_dt_attribute_def_xid contains unique identifier for data transfer attribute "
        },
        "ASSOCIATE_TRANSLATION_KEY": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "info": "This field stores string that defines the association type. Ex Trade Transaction or Trade Transcation Line. "
        },
        "ATTRIBUTE_TRANSLATION_KEY": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "info": "This field stores string that defines the qualifier name. ex :Remark or Refnum "
        },
        "SOURCE_LIST_TYPE1": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "This field indicates the type of the qualifier for source attribute value. The values can be G/D/P/F. G in case the attribute is a simple attribute. D is used for drop list. P is used for picklist.F is used for Fixed List. "
        },
        "SOURCE_QUERY_CLASS1": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This filed indicates the query class name of the source qualifier. This is required in case the value of the field source_list_type is G or P "
        },
        "SOURCE_LIST_TYPE2": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "This field indicates the type of the qualifier for source attribute value. The values can be G/D/P/F. G in case the attribute is a simple attribute. D is used for drop list. P is used for picklist.F is used for Fixed List. "
        },
        "SOURCE_QUERY_CLASS2": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This filed indicates the query class name of the source qualifier. This is required in case the value of the field source_list_type is G or P "
        },
        "TARGET_LIST_TYPE1": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "This field indicates the type of the qualifier for target attribute value. The values can be G/D/P/F. G in case the attribute is a simple attribute. D is used for drop list. P is used for picklist.F is used for Fixed List. "
        },
        "TARGET_QUERY_CLASS1": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This filed indicates the query class name of the target qualifier. This is required in case the value of the field target_list_type is G or P "
        },
        "TARGET_LIST_TYPE2": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "This field indicates the type of the qualifier for target attribute value. The values can be G/D/P/F. G in case the attribute is a simple attribute. D is used for drop list. P is used for picklist.F is used for Fixed List. "
        },
        "TARGET_QUERY_CLASS2": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This filed indicates the query class name of the target qualifier. This is required in case the value of the field target_list_type is G or P "
        },
        "JAVA_CLASS": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true
        },
        "SOURCE1_TRANSLATION_KEY": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "To store transaltion key for source1 "
        },
        "SOURCE2_TRANSLATION_KEY": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "To store transaltion key for source2 "
        },
        "TARGET1_TRANSLATION_KEY": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "To store transaltion key for target1 "
        },
        "TARGET2_TRANSLATION_KEY": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "To store transaltion key for target2 "
        },
        "ASSOCIATION_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "Identifies the objects between which the data configuration is applied. Takes the values SH-TT, OR-TT, OB-TT, TT-DE. "
        },
        "IS_SOURCE1_MANDATORY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Takes the values Y/N. Determines if the source 1 requires input mandatorily or optional. "
        },
        "IS_SOURCE2_MANDATORY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Takes the values Y/N. Determines if the source 2 requires input mandatorily or optional. "
        },
        "IS_TARGET1_MANDATORY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Takes the values Y/N. Determines if the target 1 requires input mandatorily or optional. "
        },
        "IS_TARGET2_MANDATORY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Takes the values Y/N. Determines if the target 2 requires input mandatorily or optional. "
        },
        "SOURCE_FIXED_VALUES1": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Takes the list of fixed values if the SOURCE_LIST_TYPE1 is F. "
        },
        "SOURCE_FIXED_VALUES2": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Takes the list of fixed values if the SOURCE_LIST_TYPE2 is F. "
        },
        "TARGET_FIXED_VALUES1": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Takes the list of fixed values if the TARGET_LIST_TYPE1 is F. "
        },
        "TARGET_FIXED_VALUES2": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Takes the list of fixed values if the TARGET_LIST_TYPE2 is F."
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "GTM_DT_CONFIG_ATTRIBUTE"
      ]
    }
  }
};
