<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/">

    <html>
      <head>
        <title>XML Sitemap</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: #e2e8f0;
            margin: 0;
            padding: 40px;
          }

          h1 {
            color: #22d3ee;
            margin-bottom: 10px;
          }

          p {
            color: #94a3b8;
            margin-bottom: 30px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            background: #020617;
            border-radius: 10px;
            overflow: hidden;
          }

          th, td {
            padding: 14px;
            text-align: left;
          }

          th {
            background: #020617;
            color: #22d3ee;
            border-bottom: 1px solid #1e293b;
          }

          tr {
            border-bottom: 1px solid #1e293b;
          }

          tr:hover {
            background: #020617;
          }

          a {
            color: #38bdf8;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          .count {
            margin-top: 15px;
            font-size: 14px;
            color: #64748b;
          }
        </style>
      </head>

      <body>

        <h1>Website Sitemap</h1>
        <p>List of all indexed pages on this website.</p>

        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Priority</th>
          </tr>

          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td>
                <a href="{sitemap:loc}" target="_blank">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
              </td>
              <td>
                <xsl:value-of select="sitemap:lastmod"/>
              </td>
              <td>
                <xsl:value-of select="sitemap:priority"/>
              </td>
            </tr>
          </xsl:for-each>

        </table>

        <div class="count">
          Total URLs:
          <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
        </div>

      </body>
    </html>

  </xsl:template>
</xsl:stylesheet>
