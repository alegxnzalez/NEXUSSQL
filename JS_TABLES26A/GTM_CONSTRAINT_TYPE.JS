// GTM_CONSTRAINT_TYPE.js

window.GTM_CONSTRAINT_TYPE = {
  "tables": {
    "GTM_CONSTRAINT_TYPE": {
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
        "GTM_CONSTRAINT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GTM_CONSTRAINT_TYPE_GID contains the unique identifier for the Constraint  Type"
},
        "GTM_CONSTRAINT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GTM_CONSTRAINT_TYPE_XID contains the unique external identifier for the Constraint Type"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Description of the Constraint Type.  This contains details of how a Constraint of this type will be used for matching and is displayed on the UI against each Constraint detail ."
},
        "D_LIST_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "G",
                    "D",
                    "P",
                    "T",
                    "F",
                    "S"
          ],
          "info": "Indicates the detail type of the constraint.  Possible values : G,D,P,T,F,S. G- GID type. Used when constraint requires no further input/value for matching. Eg: For constraint Item, Item ID will be considered. D- Droplist detail type for Qualifiers. Used when constraint requires a list of Qualifiers for matching. Selection of Qualifiers can be done using Droplist. eg: For constraint: Refnum,  Refnum Qualifiers can be entered using a droplist. P- Picklist detail type for Qualifiers. Used when constraint requires a list of Qualifiers for matching. Selection of Qualifiers in this case can be done using Picklist  T- Type detail type. Used to specify Product classification type for Line Classification Code constraint. F- F is used for Fixed List.S- to mention some free text value,to be used in combination with other types of constraint (G,D,P,T,F)."
},
        "D_LIST_QUERY_CLASS": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Indicates the query class name of the Qualifier for entering Constraint Details List.                                              This column is applicable only when the Constraint Type requires Qualifiers to be specified as Constraint Details (ie) Non Gid Type. Eg:  REFNUM , REMARK, INVOLVED PARTY"
},
        "D_LIST_LABEL": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Indicates the label to be used on the Qualifier grid to enter Constraint Details.                                                       This column is applicable only when the Constraint Type requires Qualifiers to be specified as Constraint Details (ie) Non Gid Type. Eg:  REFNUM , REMARK, INVOLVED PARTY"
},
        "D_LIST_VALID_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "This columns helps to maintain the valid values when d_list_type is F in the VALID_VALUE_TYPE table."
},
        "D_LIST_TYPE2": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "G",
                    "D",
                    "P",
                    "T",
                    "F",
                    "S"
          ],
          "info": "Indicates the detail type of the constraint. Possible values : G,D,P,T,F,S.  G- GID type. Used when constraint requires no further input/value for matching.  D- Droplist detail type for Qualifiers. Used when constraint requires a list of Qualifiers for matching.  P- Picklist detail type for Qualifiers. Used when constraint requires a list of Qualifiers for matching.  T- Type detail type. Used to specify Product classification type for Line Classification Code constraint.  F- F is used for Fixed List.S- to mention some free text value,to be used in combination with other types of constraint (G,D,P,T,F)."
},
        "D_LIST_QUERY_CLASS2": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Indicates the query class name of the Qualifier for entering Constraint Details List. This column is applicable only when the Constraint Type requires Qualifiers to be specified as Constraint Details (ie) Non Gid Type. Eg:  REFNUM , REMARK, INVOLVED PARTY"
},
        "D_LIST_LABEL2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Indicates the label to be used on the Qualifier grid to enter Constraint Details. This column is applicable only when the Constraint Type requires Qualifiers to be specified as Constraint Details (ie) Non Gid Type. Eg:  REFNUM , REMARK, INVOLVED PARTY"
},
        "D_LIST_VALID_VALUE_TYPE_GID2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "This columns helps to maintain the valid values when d_list_type2 is F in the VALID_VALUE_TYPE table."
},
        "D_LIST_TYPE3": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "G",
                    "D",
                    "P",
                    "T",
                    "F",
                    "S"
          ],
          "info": "Indicates the detail type of the constraint. Possible values : G,D,P,T,F,S.  G- GID type. Used when constraint requires no further input/value for matching.  D- Droplist detail type for Qualifiers. Used when constraint requires a list of Qualifiers for matching.  P- Picklist detail type for Qualifiers. Used when constraint requires a list of Qualifiers for matching.  T- Type detail type. Used to specify Product classification type for Line Classification Code constraint.  F- F is used for Fixed List.S- to mention some free text value,to be used in combination with other types of constraint (G,D,P,T,F)."
},
        "D_LIST_QUERY_CLASS3": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Indicates the query class name of the Qualifier for entering Constraint Details List.                                              This column is applicable only when the Constraint Type requires Qualifiers to be specified as Constraint Details (ie) Non Gid Type. Eg:  REFNUM , REMARK, INVOLVED PARTY"
},
        "D_LIST_LABEL3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Indicates the label to be used on the Qualifier grid to enter Constraint Details.                                                       This column is applicable only when the Constraint Type requires Qualifiers to be specified as Constraint Details (ie) Non Gid Type. Eg:  REFNUM , REMARK, INVOLVED PARTY"
},
        "D_LIST_VALID_VALUE_TYPE_GID3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "This columns helps to maintain the valid values when d_list_type3 is F in the VALID_VALUE_TYPE table."
},
        "D_LIST_TYPE4": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "G",
                    "D",
                    "P",
                    "T",
                    "F",
                    "S"
          ],
          "info": "Indicates the detail type of the constraint. Possible values : G,D,P,T,F,S.  G- GID type. Used when constraint requires no further input/value for matching.  D- Droplist detail type for Qualifiers. Used when constraint requires a list of Qualifiers for matching.  P- Picklist detail type for Qualifiers. Used when constraint requires a list of Qualifiers for matching.  T- Type detail type. Used to specify Product classification type for Line Classification Code constraint.  F- F is used for Fixed List.S- to mention some free text value,to be used in combination with other types of constraint (G,D,P,T,F)."
},
        "D_LIST_QUERY_CLASS4": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Indicates the query class name of the Qualifier for entering Constraint Details List. This column is applicable only when the Constraint Type requires Qualifiers to be specified as Constraint Details (ie) Non Gid Type. Eg: REFNUM , REMARK, INVOLVED PARTY"
},
        "D_LIST_LABEL4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Indicates the label to be used on the Qualifier grid to enter Constraint Details. This column is applicable only when the Constraint Type requires Qualifiers to be specified as Constraint Details (ie) Non Gid Type. Eg: REFNUM , REMARK, INVOLVED PARTY"
},
        "D_LIST_VALID_VALUE_TYPE_GID4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "This columns helps to maintain the valid values when d_list_type4 is F in the VALID_VALUE_TYPE table."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
},
        "TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translation GID"
},
        "GTM_CONSTRAINT_TYPE_GROUP": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "This column tells to which group this constraint_type belongs to."
}
      },
      "fk_tables": [
        "GTM_CSET_TYPE_C_TYPE_MAP"
]
    }
  }
};