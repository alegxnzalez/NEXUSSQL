// GTM_COMPLIANCE_RULE.js

window.GTM_COMPLIANCE_RULE = {
  "tables": {
    "GTM_COMPLIANCE_RULE": {
      "columns": {
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_COMPLIANCE_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "GTM_PRODUCT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PRODUCT_GROUP"
},
        "RESTRICTED_LIST_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PARTY_LIST_GROUP"
},
        "GTM_REGULATION_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGULATION_REFERENCE"
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true
},
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true
},
        "GTM_CONTROL_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONTROL_CATEGORY"
},
        "GTM_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE"
},
        "CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE"
},
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMMODITY"
},
        "USER_DEFINED_COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_DEFINED_COMMODITY"
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM"
},
        "COUNTRY_OF_ORIGIN": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
},
        "COUNTRY_OF_MANUFACTURING": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE"
},
        "IS_FOR_TRANSACTION_LINE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "Product Classification Type of the classification"
},
        "CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Classification Code of the classificatiNo. Can contain wildcard characters."
},
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM",
          "info": "Inco Term Gid that should be matched while screening."
},
        "INCO_TERM_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM_PROFILE",
          "info": "Inco term profile gid used in screening."
},
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "Mode profile gid will be used in screening."
},
        "GTM_TRANSACTION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TRANSACTION_TYPE",
          "info": "Transaction Type GID"
},
        "GTM_TRANS_TYPE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TRANS_TYPE_PROFILE",
          "info": "Transaction Type Profile GID"
},
        "GTM_DECLARATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DECLARATION_TYPE",
          "info": "Declaration Type GID"
},
        "GTM_DECL_TYPE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DECL_TYPE_PROFILE",
          "info": "Declaration Type Profile GID"
},
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "T",
                    "D",
                    "B"
          ],
          "info": "This field represents the perspective. The allowed values are 'T','D','B'. T  means Transaction, D means Declaration , B means Both"
},
        "DATE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DATE_QUALIFIER",
          "info": "This date qualifier is used to specify which date on the Transaction or Transaction Line should be compared with the Rule's Effective and Expiration Dates"
}
      },
      "fk_tables": [
        "GTM_COMPLIANCE_RULE_COUNTRY",
        "GTM_COMPLIANCE_RULE_REGION",
        "GTM_COMPLIANCE_RULE_REMARK",
        "GTM_COMPLIANCE_RULE_TYPE_CODE",
        "GTM_COMP_RULE_VALUE",
        "GTM_CONTACT_ST_SCREEN",
        "GTM_CRULE_ACTION",
        "GTM_CRULE_CLASS_CODE_ATTRIBUTE",
        "GTM_CRULE_DOCUMENT_REVIEWER",
        "GTM_CRULE_DOCUMENT_SUBSCRIBER",
        "GTM_CRULE_ITEM_REFNUM",
        "GTM_CRULE_ITEM_REMARK",
        "GTM_CRULE_ITEM_STR_RESTRICTION",
        "GTM_CRULE_PARTY_REFNUM",
        "GTM_CRULE_PARTY_REMARK",
        "GTM_CRULE_PARTY_TYPE_CODE",
        "GTM_CRULE_POLICY_RESTRICTION",
        "GTM_CRULE_TLINE_SAVEDQUERY",
        "GTM_CRULE_TRANSLINE_REFNUM",
        "GTM_CRULE_TRANSLINE_REMARK",
        "GTM_CRULE_TRANS_REFNUM",
        "GTM_CRULE_TRANS_REMARK",
        "GTM_RULE_RESTRICTION",
        "GTM_RULE_SET_RULE_JOIN",
        "GTM_TRANSACTION_POLICY",
        "GTM_TRANSACTION_REQDOC",
        "GTM_TRANS_LINE_REQDOC_LINK",
        "GTM_TRANS_LINE_TEXT_LINK",
        "GTM_TRANS_REQD_TEXT",
        "GTM_TR_BASE_AMOUNT",
        "GTM_TR_CONTROL_SCREEN",
        "GTM_TR_OTHER_CONTROL",
        "GTM_TR_REPORTING",
        "GTM_TR_SANCTION",
        "GTM_TR_STRUC_MATCH_RULE_DETAIL"
]
    }
  }
};