// CONTENT_MANAGEMENT_SYSTEM.js

window.CONTENT_MANAGEMENT_SYSTEM = {
  "tables": {
    "CONTENT_MANAGEMENT_SYSTEM": {
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
        "CONTENT_MANAGEMENT_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Content Management System GID "
        },
        "CONTENT_MANAGEMENT_SYSTEM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Content Management System XID "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "Description of system "
        },
        "URL": {
          "type": "VARCHAR2(1024)",
          "nullable": true,
          "info": "URL for system communication "
        },
        "TYPE": {
          "type": "VARCHAR2(8)",
          "nullable": false,
          "values": [
            "OTM",
            "WCC",
            "JCR",
            "CMIS",
            "WEBDAV",
            "ODC"
          ],
          "info": "Type of CMS: \"OTM\" = OTM is managing and storing documents within the schema. \"WCC\" - Oracle Webcenter Content is used to manage and store documents. \"JCR\" - Some other JSR-170 compliant system is used to manage and store documents. "
        },
        "USER_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "User name for remote authorization "
        },
        "PASSWORD": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Credentials for remote authorization "
        },
        "WCC_SUPPORTS_ACCOUNTS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If \"Y\", WCC has been configured to support accounts. "
        },
        "WCC_USE_DIRECT_URL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If \"Y\", users receive direct URL's into WCC, necessitating an SSO solution or login to WCC. If \"N\", content is piped through OTM. "
        },
        "WCC_USE_AUTO_GENERATED_ID": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If \"Y\", WCC has been configured to auto generated document ID's. "
        },
        "WCC_SECURITY_GROUP": {
          "type": "VARCHAR2(300)",
          "nullable": true,
          "info": "The default security group for documents. "
        },
        "WCC_DOCNAME_GEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CMS_PARAM_GENERATOR",
          "info": "The default generator for the dDocName WCC parameter. "
        },
        "WCC_DOCTITLE_GEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CMS_PARAM_GENERATOR",
          "info": "The default generator for the dDocAccount WCC parameter. "
        },
        "WCC_ACCOUNT_GEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CMS_PARAM_GENERATOR",
          "info": "The default generator for the dDocAccount WCC parameter. "
        },
        "WCC_REVLABEL_GEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CMS_PARAM_GENERATOR",
          "info": "The default generator for the dRevLabel WCC parameter. "
        },
        "WCC_REVIEW_MODE": {
          "type": "VARCHAR2(5)",
          "nullable": true,
          "values": [
            "NONE",
            "WCC",
            "OTM"
          ],
          "info": "If \"NONE\", no document review workflows are used with the CMS. If \"WCC\", OTM forwards reviewers to WCC which is responsible for managing the review process. Users can accept or deny documents from OTM, but the action is forwarded to WCC. If \"OTM\", standard OTM review workflow is used. Documents cannot be accept or denied from WCC. "
        },
        "WCC_DISTRIBUTION_MODE": {
          "type": "VARCHAR2(5)",
          "nullable": true,
          "values": [
            "NONE",
            "WCC",
            "OTM"
          ],
          "info": "If \"NONE\", no document distribution is used with the CMS. If \"WCC\", OTM forwards distribution parties to WCC which is responsible for forwarding them finalized content. Users can finalize or unfinalize documents from OTM, but the action is forwarded to WCC. If \"OTM\", standard OTM finalization workflow is used. Documents cannot be finalized from WCC. "
        },
        "JCR_CONNECTION_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "values": [
            "JNDI",
            "SERVICE LOADER",
            "JAVA"
          ],
          "info": "Type of connection to retrieve a JSR-170 Repository. \"JNDI\" assumes the content server supports JNDI lookup. \"SERVICE LOADER\" assumes libraries to support the content server are included with OTM. \"JAVA\" assumes a proprietary connection is needed. "
        },
        "JCR_CONNECTION_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "If the JCR connection type is \"JAVA\", the plugin to retrieve a JCR Repository object. "
        },
        "JCR_SUPPORTS_REVISIONS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If \"Y\", the JSR-170 compliant CMS supports document versioning "
        },
        "ROOT_FOLDER": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Root folder for all OTM documents. If null, documents are assumed unfiled. "
        },
        "FOLDER_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "values": [
            "NONE",
            "FIXED",
            "DOMAIN",
            "GENERATED"
          ],
          "info": "Type of folders for document assignment. If NONE, documents are assumed unfiled. If FIXED, all documents are placed in the root folder. If DOMAIN, documents are placed in a subfolder of the root, equal to the domain. E.g., a document in domain A/B ,with a root of R, is placed in R/A/B. If GENERATED, the subfolder is determined by a parameter generator. "
        },
        "FOLDER_GEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CMS_PARAM_GENERATOR",
          "info": "The parameter generator for document subfolders. "
        },
        "CMIS_BINDING": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "values": [
            "WEB SERVICE",
            "ATOM PUB"
          ],
          "info": "CMIS Binding. If WEB SERVICES, Web Service calls over SOAP are used to invoke CMIS. If ATOM PUB, RESTful calls are used. "
        },
        "CMIS_USE_VERSIONING": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the CMIS versioning implementation should be used when adding OTM revisions. Otherwise, an independent document is created for each revision. "
        },
        "CMIS_NAME_GEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CMS_PARAM_GENERATOR",
          "info": "Generator for the cmis:name parameter. "
        },
        "CMIS_REVLABEL_GEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CMS_PARAM_GENERATOR",
          "info": "Generator for the cmis:versionLabel parameter. "
        },
        "CMIS_REPOSITORY_ID": {
          "type": "VARCHAR2(300)",
          "nullable": true,
          "info": "CMIS repository ID. If left blank, OTM will use the first repository found. "
        },
        "FOLDER_CMS_TYPE": {
          "type": "VARCHAR2(300)",
          "nullable": true,
          "info": "Custom folder CMS type. "
        },
        "DOCUMENT_CMS_TYPE": {
          "type": "VARCHAR2(300)",
          "nullable": true,
          "info": "Custom document CMS type. "
        },
        "ODC_DOCTITLE_GEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CMS_PARAM_GENERATOR",
          "info": "This column would store the param generator gid to generate  title for documents"
        }
      },
      "fk_tables": [
        "CMS_PARAM",
        "DOCUMENT",
        "DOCUMENT_DEF"
      ]
    }
  }
};
